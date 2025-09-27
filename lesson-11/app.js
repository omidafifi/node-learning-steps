const http = require("http");
const PORT = 3000;

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>botostart.ir</h1>");
      res.end();
      res.end("<h1>botostart.ir</h1>");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 - Not Found</h1>");
      res.end();
    }
  })
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
