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

const ProductModel = {
  find,
  findById,
};

module.exports = ProductModel;
