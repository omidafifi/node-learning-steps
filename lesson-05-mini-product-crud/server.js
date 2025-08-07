const http = require("http");
const PORT = 3000;

const server = http.createServer(function (request, respons) {
  respons.writHead({});
  respons.end();
});
server.listen(() => {
  console.log(`Run Server on ${PORT} `= + "http://localhost: " %{PORT});
});
 