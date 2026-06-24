import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { Eta } from "eta";
import { query } from "../query";
import type { TOC } from "../query";

import pkg from "../../package.json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Resolve template path, checking both possible locations (dist/skill/templates or dist/cli/templates). */
function resolveTemplate(name: string): string {
  // Try skill/templates first (for dist/index.js bundle)
  const skillPath = path.join(__dirname, "skill", "templates", name);
  if (fs.existsSync(skillPath)) {
    return fs.readFileSync(skillPath, "utf8");
  }
  // Try templates (for dist/cli/index.js bundle)
  const cliPath = path.join(__dirname, "templates", name);
  if (fs.existsSync(cliPath)) {
    return fs.readFileSync(cliPath, "utf8");
  }
  // Fallback to src (development)
  const srcPath = path.join(__dirname, "..", "..", "src", "skill", "templates", name);
  return fs.readFileSync(srcPath, "utf8");
}

const SKILL_TEMPLATE = resolveTemplate("skill.md.eta");
const WRAPPER_TEMPLATE = resolveTemplate("docpack.mjs.eta");
const eta = new Eta({ autoTrim: [false, false] });

// ---------------------------------------------------------------------------
// Skill generation
// ---------------------------------------------------------------------------

/** Options for generating a skill package. */
export interface GenerateSkillOptions {
  /** Path to the existing knowledge base directory. */
  kb: string;
  /** Path to the output skill directory. */
  output: string;
  /** Imperative description of when to use the skill. */
  useWhen: string;
}

/**
 * Package an existing knowledge base as a self-contained agent skill.
 *
 * Produces:
 *   <output>/
 *     SKILL.md
 *     references/
 *       docpack.db
 *       docpack.yaml
 *     scripts/
 *       docpack.mjs
 *
 * @param options - Generation options.
 */
export function generateSkill(options: GenerateSkillOptions): void {
  const { kb, output, useWhen } = options;

  // Read manifest to get metadata
  const kbinst = query(kb);
  let homeToc: TOC | null = null;

  try {
    const manifest = kbinst.manifest();

    // Query home TOC at depth 1 for structure overview
    if (manifest.home) {
      try {
        homeToc = kbinst.toc(manifest.home, 1);
      } catch {
        // home slug might not exist, that's fine
      }
    }

    // Create output directory structure
    const refsDir = path.join(output, "references");
    const scriptsDir = path.join(output, "scripts");
    fs.mkdirSync(refsDir, { recursive: true });
    fs.mkdirSync(scriptsDir, { recursive: true });

    // Copy KB files
    fs.copyFileSync(path.join(kb, "docpack.db"), path.join(refsDir, "docpack.db"));
    fs.copyFileSync(path.join(kb, "docpack.yaml"), path.join(refsDir, "docpack.yaml"));

    // Generate SKILL.md
    const skillName = path.basename(path.resolve(kb));
    const skillMd = generateSkillMd(skillName, manifest, homeToc, useWhen);
    fs.writeFileSync(path.join(output, "SKILL.md"), skillMd, "utf8");

    // Generate wrapper script
    const script = eta.renderString(WRAPPER_TEMPLATE, { version: pkg.version });
    fs.writeFileSync(path.join(scriptsDir, "docpack.mjs"), script, "utf8");
  } finally {
    kbinst.close();
  }
}

/**
 * Generate the SKILL.md content.
 *
 * @param skillName - Name derived from the KB directory basename.
 * @param manifest - KB manifest data.
 * @param homeToc - Home document TOC at depth 1, or null.
 * @param useWhen - Imperative description of when to use the skill.
 * @returns SKILL.md content string.
 */
function generateSkillMd(
  skillName: string,
  manifest: { version: string; totalChunks: number; totalBytes: number; home: string | null; description: string | null; url: string | null },
  homeToc: TOC | null,
  useWhen: string,
): string {
  const structure = homeToc ? formatTocStructure(homeToc) : "";

  return eta.renderString(SKILL_TEMPLATE, {
    name: skillName,
    useWhen,
    version: manifest.version,
    chunks: manifest.totalChunks,
    size: formatBytes(manifest.totalBytes),
    home: manifest.home ?? "",
    description: manifest.description ?? "",
    url: manifest.url ?? "",
    structure,
  });
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Format the TOC structure as a nested list. */
function formatTocStructure(toc: TOC, indent = 0): string {
  const prefix = "  ".repeat(indent);
  const lines: string[] = [];

  lines.push(`${prefix}- **${toc.title}** (\`${toc.slug}\`)`);

  if (Array.isArray(toc.children)) {
    for (const child of toc.children) {
      lines.push(formatTocStructure(child, indent + 1));
    }
  }

  return lines.join("\n");
}

/** Format byte count to human-readable string. */
function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}


