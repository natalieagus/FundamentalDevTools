const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};


https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("My first server!\n");
}).listen(8080);

