const http = require("http");
const products = require("./data/products");
const ProductsController = require("./controllers/products.controllers");
const PORT = 3000;
const server = http.createServer((req, res) => {
  // => (Find )
  if (req.url == "/api/products") {
    ProductsController.get(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "route not found" }));
    res.end();
  }
});
server.listen(PORT, () =>
  console.log(`click to join on http://localhost:${PORT}`)
);
 