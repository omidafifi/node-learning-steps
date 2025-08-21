async function get() {
  try {
    const products = await product.model.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {}
}

const ProductsController = { get };

module.export = ProductsController;

