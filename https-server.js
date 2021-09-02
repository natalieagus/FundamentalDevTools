const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};


https
  .createServer(options, function (req, res) {
    res.writeHead(200);
    setInterval(() => {
      res.end("hello world\n");
    }, 1000);
  })
  .listen(8080);
