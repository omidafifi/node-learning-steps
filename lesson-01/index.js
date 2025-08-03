//Initialize Node.js project with basic index.js and package.json
// console.log("Hello NodeJs");

setTimeout(() => {
  console.log("NodeJs Time out");
}, 500);


console.log(global);
console.log(globalThis);
//Both of them is ===
//feat: Demonstrate usage of global and globalThis objects in Node.js

// - Added setTimeout example to show asynchronous callback execution
// - Logged `global` and `globalThis` to illustrate their equivalence in Node.js runtime