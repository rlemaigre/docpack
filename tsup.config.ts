import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/cli/index.ts"],
  format: ["esm"],
  dts: true,
  splitting: false,
  clean: true,
  shims: false,
  noExternal: [],
  external: ["better-sqlite3", "node:*"],

});
