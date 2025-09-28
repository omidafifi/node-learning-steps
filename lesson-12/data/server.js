const http = require("http");
const products = require("./product.");
const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
