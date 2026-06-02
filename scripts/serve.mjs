import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { resolve, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(import.meta.url), "../..");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

const port = 3000;

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://127.0.0.1:${port}`);
    if (url.pathname === "/favicon.ico") {
      res.writeHead(204);
      res.end();
      return;
    }
    const decodedPath = decodeURIComponent(url.pathname);
    const relative = decodedPath === "/" ? "index.html" : decodedPath.replace(/^\/+/, "");
    const filePath = resolve(root, relative);

    // Guard against path traversal
    if (filePath !== root && !filePath.startsWith(root + sep)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }

    const type = mime[extname(filePath)] || "application/octet-stream";
    res.writeHead(200, {
      "content-type": type,
      "cache-control": "no-store",
    });

    createReadStream(filePath)
      .on("error", () => {
        if (!res.headersSent) {
          res.writeHead(404);
          res.end("Not Found");
        }
      })
      .pipe(res);
  } catch (error) {
    if (!res.headersSent) {
      res.writeHead(500);
      res.end(String(error && error.stack ? error.stack : error));
    }
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log("\x1b[36m%s\x1b[0m", "==================================================");
  console.log("\x1b[32m%s\x1b[0m", `  Hermes Labyrinth website is running locally!`);
  console.log("\x1b[35m%s\x1b[0m", `  URL: http://127.0.0.1:${port}/`);
  console.log("\x1b[36m%s\x1b[0m", "==================================================");
  console.log("Press Ctrl+C to stop the server.");
});
