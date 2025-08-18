const http = require("http");
const PORT = 3000;
const products = require("./data/products");
const server = http
  .createServer((req, res) => {
    if (req.url == "/api/products") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(products));
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "route not found" }));
      res.end();
    }
  })
  .listen(PORT, () => console.log(`click to join on http://localhost:${PORT}`));
