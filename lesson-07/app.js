//creat directory
const fs = require(`fs`);
const path = require("path");

fs.mkdir(path.join(__dirname, `test`), {}, (err) => {
  console.log(err);
});
 