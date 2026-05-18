import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;
const distDir = join(__dirname, "dist");

if (!existsSync(distDir)) {
  console.error('Error: no dist/ folder found. Run "npm run build" first.');
  process.exit(1);
}

app.use(express.static(distDir));

app.get("*", (_req, res) => {
  res.sendFile(join(distDir, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Treasure Guide running at http://0.0.0.0:${port}`);
});
