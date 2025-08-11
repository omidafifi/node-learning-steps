const http = require(`http`);
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hi");
  })
  .listen(3000, () => {
    console.log("Click here http://localhost:3000");
  });
