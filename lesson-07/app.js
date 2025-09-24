//creat directory
const { isUtf8 } = require("buffer");
const fs = require(`fs`);
const path = require("path");
// ساخت پوشه توسط ماژول fs
fs.mkdir(path.join(__dirname, `test`), {}, (err) => {
  if (err) {
    console.log(`Folder created....`);
  } else {
    console.log(`somthing is wrong`);
  }
});
//write file
fs.writeFile(path.join(__dirname, `test`, `test.txt`), `utf8`, (err) => {
  if (err) {
    console.log("File witten...");
  } else {
    console.log("somthins is error");
  }
});
//append file
fs.appendFile(path.join(__dirname, `test`, `test.txt`), `utf8`, (err) => {
  if (err) {
    console.log("File witten...");
  } else {
    console.log("somthins is error");
  }
});
//read file
fs.readFile(path.join(__dirname), `utf8`, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
