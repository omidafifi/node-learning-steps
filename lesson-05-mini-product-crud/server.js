const http = require("http");
const products = require("./data/products.json"); // 1 nokte khieli mohem in hast ke tavasato require na tanha mitunam file haye javaScript ha va modules ha ro tavasote "require" daryaft konim hata mitunim file haye jason ro ham daryaft konim  . dar inja hata mishe file jason ro ham dar akharesh hazf konam va kar mikone
const PORT = 3000;

const server = http.createServer(function (req, res) {
  if (req.url == "/api/products") {
    res.writeHead(200, { "Content-Type": "application.json" });
    res.write(JSON.stringify(products)); //dar inja products ro be samte client ersal kardam
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "application.json" }); //status 404 be manaye not found hastesh
    res.write(JSON.stringify({ message: "Rout Not Found" })); //dar inja products ro be samte client ersal kardam
    res.end();
  }
});
server.listen(PORT);
console.log(`Run Server on port ${PORT}  http://localhost ${PORT}`);
