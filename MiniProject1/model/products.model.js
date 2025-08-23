const products = require("../data/products.json");
async function find() {
  return new Promise((resoleve, reject) => {
    resoleve(products);
  });
}

async function findById(id) {
  return new Promise((resoleve, reject) => {
    resoleve(products.find((product) => product.id == id));
  });
}
async function creat(product) {
  return new Promise((resoleve, reject) => {
    products.push(product);
    resoleve();
  });
}

const ProductModel = {
  find,
  findById,
  creat,
};

module.exports = ProductModel;
