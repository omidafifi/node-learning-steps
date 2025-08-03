//Modules
//Es Modules => import , export , export defult
// CommonJs Modules => require , module.exports.foo= .. , module.exportes

const { add, subtract } = require("./commonJs-module");
console.log(add(2, 5), subtract(5, 3));
