const http = require("http");
const products = require("./data/products");
const ProductsController = require("./controllers/products.controllers");
const errorHandler = require("./controllers/errorHandler.controller");
const PORT = 3000;
const server = http.createServer((req, res) => {
  // => (Find )
  if (req.url == "/api/products") {
    ProductsController.get(req, res);
  } else if (req.url.match(/\/api\/products\/[0-9]+/)) {
    ProductsController.getById(req, res);
  } else {
  }
});
server.listen(PORT, () =>
  console.log(`click to join on http://localhost:${PORT}`)
);
