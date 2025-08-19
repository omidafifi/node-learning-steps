const products = require("../data/products.json");
async function find() {
  return new Promise((resoleve, reject) => {
    resoleve(products);
  });
}

const ProductModel = {
  find,
};

modules.exports = ProductModel;
 