const fs = require("fs");

const app = fs.readFileSync("index.md", "utf8");
console.log(app);

// exports.modules.fs = app; false syntax error

module.exports = app;
