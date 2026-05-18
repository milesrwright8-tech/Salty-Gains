import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";
import { spawnSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;
const distDir = join(__dirname, "dist");

if (!existsSync(distDir)) {
  console.log("Building app...");
  const result = spawnSync(
    "npx",
    ["vite", "build", "--logLevel", "warn"],
    { cwd: __dirname, stdio: "inherit" }
  );
  if (result.status !== 0) {
    console.error("Build failed.");
    process.exit(1);
  }
  console.log("Build complete.");
}

app.use(express.static(distDir));

app.get("*", (_req, res) => {
  res.sendFile(join(distDir, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Sea of Thieves Treasure Guide → http://localhost:${port}`);
});
