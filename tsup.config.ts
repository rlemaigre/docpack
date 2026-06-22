import { defineConfig } from "tsup";
import * as fs from "node:fs";
import * as path from "node:path";

export default defineConfig({
  entry: ["src/index.ts", "src/cli/index.ts"],
  format: ["esm"],
  dts: true,
  splitting: false,
  clean: true,
  shims: false,
  noExternal: [],
  external: ["better-sqlite3", "node:*"],
  async onSuccess() {
    // Copy template files next to each bundle that needs them
    const src = path.join(process.cwd(), "src", "skill", "templates");
    for (const destDir of ["dist/skill", "dist/cli"]) {
      const dest = path.join(process.cwd(), destDir, "templates");
      fs.mkdirSync(dest, { recursive: true });
      for (const file of fs.readdirSync(src)) {
        fs.copyFileSync(path.join(src, file), path.join(dest, file));
      }
    }
  },
});
