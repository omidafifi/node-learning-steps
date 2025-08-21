async function get() {
  try {
    const products = await product.model.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {}
}
async function getById() {
  try {
    // const id = req.url.split("/")[3];
    const [, , , id] = req.url.split("/");
    const product = await ProductModel.findById(id);
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify({ message: "not found any product" }));
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    }
  } catch (error) {}
}

const ProductsController = { get, getById };

module.export = ProductsController;
