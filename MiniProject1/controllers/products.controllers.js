const ProductModel = require("../model/products.model");

async function get() {
  try {
    const products = await ProductModel.find();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}
async function creat() {
  try {
    await ProductModel.creat({
      id: Date.now(),
      name: "new Name",
      description: "new Description",
      price: 4300,
    });
    res.writeHead(201, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Products created successfully" }));
    res.end();
  } catch (error) {
    console.log(error);
  }
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
  } catch (error) {
    console.log(error);
  }
}

const ProductsController = { get, getById, creat };

module.exports = ProductsController;
