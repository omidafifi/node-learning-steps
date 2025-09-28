const http = require("http");
const products = require("./product.json");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/api/products") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
