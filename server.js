// Simple hello-world server

const http = require("http");

const host = "0.0.0.0";
const port = 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  setInterval(() => {
    res.end("My first server!");
  }, 1000);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
