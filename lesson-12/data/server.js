const http = require(`http`);
const PORT = 3000;
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
  })
  .listen(`${PORT}`, () => {
    console.log(`Server runing on http://localhost${PORT}`);
  });
