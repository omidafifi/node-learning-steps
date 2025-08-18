const http = require("http");
const PORT = 3000;

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end("Hallo NodeJs");
  })
  .listen(PORT, () => console.log(`click to join on http://localhost:${PORT}`));
