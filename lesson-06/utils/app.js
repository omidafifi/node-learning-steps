import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ساخت __dirname در ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, "test");

fs.mkdir(folderPath, { recursive: true }, (err) => {
  err ? console.error("Error creating folder:", err) 
      : console.log("Folder created successfully!");
});