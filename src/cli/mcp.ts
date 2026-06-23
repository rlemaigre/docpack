import { z } from "zod";
import { query } from "../query";
import { formatXml, formatYaml } from "./format";

/** Parse depth argument: number or 'full'. */
export function parseDepth(value: string): number | "full" | null {
  let result: number | "full" | null = null;
  if (value === "full") {
    result = "full";
  } else {
    const n = Number(value);
    if (Number.isInteger(n) && n >= 0) {
      result = n;
    }
  }
  return result;
}

/**
 * Start an MCP server over stdio for the given knowledge base.
 *
 * Exposes four tools: manifest, toc, get, search.
 * The KB connection is opened once and shared across tool calls.
 *
 * @param kbDir - Path to the KB directory containing docpack.db and docpack.yaml.
 */
export async function startMCPServer(kbDir: string): Promise<void> {
  const { McpServer } = await import("@modelcontextprotocol/sdk/server/mcp.js");
  const { StdioServerTransport } = await import("@modelcontextprotocol/sdk/server/stdio.js");

  const kbinst = query(kbDir);

  const server = new McpServer({
    name: "docpack",
    version: "0.1.0",
  });

  registerManifestTool(server, kbinst);
  registerTocTool(server, kbinst);
  registerGetTool(server, kbinst);
  registerSearchTool(server, kbinst);

  const transport = new StdioServerTransport();
  await server.connect(transport);
}

// ---------------------------------------------------------------------------
// Tool registrations
// ---------------------------------------------------------------------------

function registerManifestTool(
  server: InstanceType<typeof import("@modelcontextprotocol/sdk/server/mcp.js").McpServer>,
  kb: ReturnType<typeof query>,
): void {
  server.registerTool(
    "manifest",
    { description: "Return the knowledge base manifest." },
    () => {
      const manifest = kb.manifest();
      return { content: [{ type: "text", text: formatYaml(manifest) }] };
    },
  );
}

function registerTocTool(
  server: InstanceType<typeof import("@modelcontextprotocol/sdk/server/mcp.js").McpServer>,
  kb: ReturnType<typeof query>,
): void {
  server.registerTool(
    "toc",
    {
      description: "Return the table of contents for a slug.",
      inputSchema: {
        slug: z.string().describe("Document slug"),
        depth: z.string().optional().describe("Depth mode: number or 'full'"),
      },
    },
    (args: { slug: string; depth?: string }) => {
      const depth = parseDepth(args.depth ?? "full");
      if (depth === null) {
        return { content: [{ type: "text", text: "Invalid depth value" }], isError: true };
      }
      const toc = kb.toc(args.slug, depth);
      return { content: [{ type: "text", text: formatYaml(toc) }] };
    },
  );
}

function registerGetTool(
  server: InstanceType<typeof import("@modelcontextprotocol/sdk/server/mcp.js").McpServer>,
  kb: ReturnType<typeof query>,
): void {
  server.registerTool(
    "get",
    {
      description: "Get one or more documents and their subtrees as XML.",
      inputSchema: {
        slug: z.union([z.string(), z.array(z.string())]).describe("Document slug or array of slugs"),
      },
    },
    (args: { slug: string | string[] }) => {
      const slugs = Array.isArray(args.slug) ? args.slug : [args.slug];
      const docs = kb.get(slugs);
      if (docs.length === 0) {
        return { content: [{ type: "text", text: `No slugs found: ${slugs.join(", ")}` }], isError: true };
      }
      return { content: [{ type: "text", text: formatXml(...docs) }] };
    },
  );
}

function registerSearchTool(
  server: InstanceType<typeof import("@modelcontextprotocol/sdk/server/mcp.js").McpServer>,
  kb: ReturnType<typeof query>,
): void {
  server.registerTool(
    "search",
    {
      description: "Full-text search the knowledge base.",
      inputSchema: {
        query: z.string().describe("Search query (FTS5 language)"),
        limit: z.number().optional().describe("Maximum results"),
        offset: z.number().optional().describe("Results to skip"),
      },
    },
    (args: { query: string; limit?: number; offset?: number }) => {
      const results = kb.search({
        query: args.query,
        limit: args.limit ?? 10,
        offset: args.offset ?? 0,
      });
      return { content: [{ type: "text", text: formatYaml(results) }] };
    },
  );
}
