//Core Modules (http)

const http = require("http");

http
  .createServer(function (request, response) {
    console.log(request.url);
    response.end("Server is running");
  })
  .listen(3000, () => {
    console.log("Server run on port 3000 : http://localhost:3000");
  });