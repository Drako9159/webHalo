const http = require("http");
function sitioweb(req, res) {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.end("running server");
}
let servidor = http.createServer(sitioweb);
servidor.listen(8081, "192.168.1.140");

console.log("server runing");
