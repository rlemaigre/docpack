# Research: llama.cpp Qwen3.6-27B Full Prompt Re-processing Bug

## Summary

Qwen3.6-27B (and other hybrid/recurrent models using the Gated DeltaNet architecture) forces full prompt re-processing on every conversation turn in llama.cpp due to two bugs in the server-side context checkpoint logic (`tools/server/server-context.cpp`). The checkpoint search predicate uses an SWA-specific check (`pos_min < pos_min_thold`) that always fails for hybrid models where `pos_min` equals the full sequence length, and the checkpoint creation threshold (64 tokens) prevents short-turn prompts from ever being checkpointed. These bugs make multi-turn agentic workflows (OpenCode, Claude Code) practically unusable, with ~15 seconds per turn instead of milliseconds. Fixes have been implemented in PR #23121 and PR #22929 but may not yet be in build b9803.

---

## Findings

### 1. Root Cause: Two Bugs in Context Checkpoint Logic

**Bug 1 — Checkpoint search predicate is SWA-specific:** The checkpoint restore logic in `server-context.cpp` uses `cur.pos_min < pos_min_thold` to find a valid checkpoint. For hybrid/recurrent models like Qwen3.6-27B, `pos_min` always equals the full sequence length, so this condition never matches. No checkpoint is ever restored, and the entire prompt is re-processed from scratch.

**Bug 2 — Checkpoint creation threshold too high:** Checkpoint creation requires `n_tokens >= 64`. For short user messages (e.g., single-turn responses of 19 tokens), no checkpoint is ever created. Even if Bug 1 were fixed, there would be nothing to restore.

**Fix 1:** For hybrid/recurrent models, use `cur.pos_max <= pos_next` instead of the SWA-based `pos_min` check when searching for a valid checkpoint.

**Fix 2:** Lower the checkpoint creation minimum from 64 to 4 tokens for hybrid/recurrent models so short prompts also get checkpointed.

These fixes are implemented in [PR #23121](https://github.com/ggml-org/llama.cpp/pull/23121) by @bjahoor and [PR #22929](https://github.com/ggml-org/llama.cpp/pull/22929) by @jacekpoplawski/aldehir. [Source](https://github.com/ggml-org/llama.cpp/issues/22384)

### 2. The Error Message and Log Evidence

The exact error observed is:

```
forcing full prompt re-processing due to lack of cache data (likely due to SWA or hybrid/recurrent memory, see https://github.com/ggml-org/llama.cpp/pull/13194#issuecomment-2868343055)
```

This is followed by erasure of all invalidated context checkpoints. In issue #22746, a 15K-token conversation took ~15 seconds per turn. In issue #24055, the same bug occurs even with `--ctx-checkpoints 64` and `--checkpoint-min-step 512`. The log shows the checkpoint being checked against the wrong position, then immediately erased:

```
Checking checkpoint with [2799, 2799] against 2608...
forcing full prompt re-processing due to lack of cache data...
erased invalidated context checkpoint (pos_min = 2799, pos_max = 2799, n_tokens = 2800, n_swa = 0, pos_next = 0, size = 149.626 MiB)
```

The warning explicitly references [PR #13194#issuecomment-2868343055](https://github.com/ggml-org/llama.cpp/pull/13194#issuecomment-2868343055), which documents the SWA/hybrid memory architecture. [Source](https://github.com/ggml-org/llama.cpp/issues/24055), [Source](https://github.com/ggml-org/llama.cpp/issues/22746)

### 3. Performance Impact

| Metric | Before Fix | After Fix (expected) |
|---|---|---|
| Turn 2 prefill time | ~12-15 seconds | ~115 ms |
| Tokens re-processed | Full prompt (e.g., 12,146 tokens) | Only new tokens (e.g., 19 tokens) |
| Tokens per second (prefill) | ~220 t/s | ~200+ t/s (same hardware, but on fewer tokens) |
| Multi-turn usability | Practically unusable for agentic workflows | Fully usable |

In issue #24055, the user's logs show Turn 1: 12,680ms for 2,811 tokens. Turn 2: another 12,680ms for the same 2,811 tokens (full re-process). After the fix, the expected behavior (as shown in the b9309 logs in #24055) is to restore checkpoint at pos 2299 and only re-process 517 tokens in 2,582ms. [Source](https://github.com/ggml-org/llama.cpp/issues/24055)

### 4. Affected Models

The bug affects all hybrid/recurrent models with DeltaNet/Mamba-style architectures:

- **Qwen3.6-27B** (arch `qwen3_5`, GDN hybrid) — primary target
- **Qwen3.5-27B** (arch `qwen3_5`)
- **Qwen3.6-35B-A3B** (arch `qwen3_5`, GDN hybrid) — also affected by a related [eval bug #23589](https://github.com/ggml-org/llama.cpp/issues/23589) where KV cache drops ~4k tokens per turn
- **Nemotron-H** (NVIDIA hybrid models)
- **Jamba** (AI21 hybrid models)
- **Granite-H** (IBM hybrid models)
- **Falcon-H1** (TII hybrid models)
- **Qwen3-Next** (upcoming hybrid models)

All affected models share the characteristic that `pos_min` equals the sequence length for the recurrent portion of the architecture. [Source](https://github.com/ggml-org/llama.cpp/pull/23121), [Source](https://github.com/ggml-org/llama.cpp/issues/22384)

### 5. Related Fixes and PRs

| PR/Issue | Author | Status | Description |
|---|---|---|---|
| **#23121** | @bjahoor | Open | Primary fix: `pos_max <= pos_next` predicate, seq_rm fallback, lower threshold to 4 tokens |
| **#22929** | @jacekpoplawski/@aldehir | Closed | Creates checkpoints before every user message (not just the last), derived from message_spans. Adds `--checkpoint-min-step` |
| **#20428** | @krystophny | Closed | Fallback: if `llama_memory_seq_rm` fails after checkpoint restore, keep cached state instead of clearing slot |
| **#20925** | @petter-b | Closed | Speculative checkpoint bugs on hybrid models (1481 additions, 125 deletions across 14 files) |
| **#24110** | @Abioy | Merged | Avoid unnecessary checkpoint restore when new tokens are present |
| **#23589** | — | Open | Eval bug: KV cache drops ~4k tokens per turn on Qwen3.6-35B-A3B since build b9235 |
| **#24055** | — | Open | Confirmed bug on Qwopus3.6-27B with `--ctx-checkpoints 64 --checkpoint-min-step 512` |
| **#13194** | @ggerganov | Merged | Original SWA/iSWA implementation; contains the warning message that the bug references |
| **#16382** | @ddh0 | Merged | Generalized SWA checkpointing to hybrid/recurrent models (the feature that introduced the bug) |

[Source](https://github.com/ggml-org/llama.cpp/issues/22384), [Source](https://github.com/ggml-org/llama.cpp/pull/23121), [Source](https://github.com/ggml-org/llama.cpp/pull/22929), [Source](https://github.com/ggml-org/llama.cpp/pull/20428), [Source](https://github.com/ggml-org/llama.cpp/issues/24055)

### 6. The `--ctx-checkpoints 0` Setting

The user's setting of `--ctx-checkpoints 0` disables context checkpointing entirely. This means:
- No checkpoints are created at all
- No checkpoints are restored
- Every turn must re-process the full prompt from scratch
- This is a **workaround that trades correctness for predictability** — the user avoids the buggy checkpoint logic by opting out entirely

With `--ctx-checkpoints 0`, the model still works correctly (no crashes, no errors), but performance degrades to full re-processing on every turn, which is the same symptom as the bug but for a different reason (intentional opt-out vs. broken logic).

The `--ctx-checkpoints` flag was introduced in [PR #15293](https://github.com/ggml-org/llama.cpp/pull/15293) for SWA models and generalized to hybrid models in [PR #16382](https://github.com/ggml-org/llama.cpp/pull/16382). The default is 32. Setting it to 0 disables the feature. [Source](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md)

### 7. The `peg-native` Chat Format

`peg-native` is llama.cpp's PEG (Parsing Expression Grammar) native chat format, introduced in [PR #17136](https://github.com/ggml-org/llama.cpp/pull/17136). It is a composable PEG parser for chat templates, supporting:
- Native tool call formats for Llama 3.x, Qwen 2.5, Mistral function calling, etc.
- Reasoning tags (`<think>`, `</think>`)
- Content and tool call nodes

For Qwen3.6-27B, `peg-native` is the recommended chat format. It is unrelated to the checkpoint bug — it only affects how messages are parsed and structured, not how KV cache is managed. The checkpoint logic operates at a lower level (on token positions within the slot), independent of the chat format. [Source](https://github.com/ggml-org/llama.cpp/blob/master/docs/development/parsing.md), [Source](https://github.com/ggml-org/llama.cpp/blob/master/docs/function-calling.md)

### 8. Workarounds

1. **`--ctx-checkpoints 0`** (user's current setting): Disables checkpointing entirely. No crash, no error, but full re-processing every turn. Predictable behavior but poor performance.

2. **Downgrade to pre-b9354 build**: Issue #24055 reports that `--checkpoint-every-n-tokens` (the deprecated flag) works on build b9309 but not on b9354+. The new `--checkpoint-min-step` flag replaced the old `--checkpoint-every-n-tokens` flag, and the new logic has the bugs.

3. **Wait for PR #23121 or #22929 to be merged**: Both PRs are open (or one is closed/merged). Once merged into master, rebuild llama.cpp or wait for the next Docker image.

4. **`--cache-prompt` with `--cache-reuse`**: The prompt cache (separate from context checkpoints) may provide some benefit. Issue #24055 shows the user already has `--cache-prompt --cache-reuse 256 --cache-ram 2048` enabled. However, the prompt cache is separate from the context checkpoint mechanism and may not help if the slot-level checkpoint logic is broken.

5. **Reduce `--checkpoint-min-step`**: The user has `--checkpoint-min-step 512`. Lowering this (e.g., to 256 or 128) might create more checkpoints, but won't fix the `pos_min` predicate bug. [Source](https://github.com/ggml-org/llama.cpp/issues/24055)

---

## Sources

### Kept
- [Issue #22384: server: fix context checkpoint restore for hybrid/recurrent models](https://github.com/ggml-org/llama.cpp/issues/22384) — Primary bug report with detailed analysis of both bugs and proposed fixes
- [PR #23121: server: fix context checkpoint restore for hybrid/recurrent models (DeltaNet/Mamba)](https://github.com/ggml-org/llama.cpp/pull/23121) — Primary fix by @bjahoor; three changes to server-context.cpp
- [PR #22929: server: fix checkpoints creation](https://github.com/ggml-org/llama.cpp/pull/22929) — Fixes checkpoint creation before every user message, adds --checkpoint-min-step
- [PR #20428: server: fix multi-turn cache reuse for hybrid/recurrent models](https://github.com/ggml-org/llama.cpp/pull/20428) — Fallback mechanism by @krystophny for seq_rm failure
- [Issue #24055: Context checkpoints always invalidated on hybrid/recurrent models](https://github.com/ggml-org/llama.cpp/issues/24055) — Direct evidence with logs from Qwopus3.6-27B; shows b9354 vs b9309 comparison
- [Issue #22746](https://github.com/ggml-org/llama.cpp/issues/22746) — Log evidence of full re-processing (~15s per turn)
- [PR #13194: kv-cache: initial iSWA implementation](https://github.com/ggml-org/llama.cpp/pull/13194) — Original SWA implementation; contains the warning message referenced by the bug
- [PR #16382: implement context checkpointing for hybrid and recurrent models](https://github.com/ggml-org/llama.cpp/pull/16382) — Generalized SWA checkpointing to hybrid models (introduced the bug)
- [llama.cpp server README](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md) — Documentation for --ctx-checkpoints, --checkpoint-min-step flags
- [Issue #23589: Eval bug: KV cache drops ~4k tokens per turn on Qwen3.6-35B-A3B](https://github.com/ggml-org/llama.cpp/issues/23589) — Related cache reuse regression

### Dropped
- [Issue #23706: DeepSeek-V4-Flash loading error](https://github.com/ggml-org/llama.cpp/issues/23706) — Unrelated; model architecture not recognized by llama.cpp
- [Issue #24327: PaddleOCR-VL multimodal](https://github.com/ggml-org/llama.cpp/issues/24327) — Unrelated; multimodal model with parsing error
- [Reddit: How to prompt caching with llama.cpp](https://www.reddit.com/r/LocalLLaMA/comments/1qzitx1/) — Blocked by network security; not essential given GitHub evidence

---

## Gaps

1. **PR #23121 merge status**: The PR appears open. Need to confirm whether it has been merged into master or is still pending review. If not merged, build b9803 likely does not include the fix.

2. **PR #22929 merge status**: The PR shows as "Closed" but the commit messages suggest it was merged (multiple fork merges visible). Need to confirm exact merge status.

3. **`--cache-reuse` effectiveness with hybrid models**: Issue #24055 shows `--cache-reuse 256` is enabled but the warning says "cache_reuse is not supported by this context, it will be disabled." Need to confirm whether this is a known limitation for hybrid models.

4. **EAGLE3 speculative decoding with hybrid models**: Issue #24541 reports EAGLE3 draft support issues with Qwen3.6-27B. Need to assess whether speculative decoding could be a viable alternative to context checkpoints for these models.

5. **Impact of `--checkpoint-min-step` on hybrid models**: The user has `--checkpoint-min-step 512`. Need to confirm whether this interacts with the bug or if the bug makes it irrelevant (since no checkpoint is ever restored regardless of spacing).

---

## Supervisor coordination

No supervisor coordination needed. Research is complete.
