// Sample server that serves from HTML file using HTTPs

const https = require("https");
const fs = require('fs').promises;
const readFile = require('fs');

const host = '0.0.0.0';
const port = 8080;

const options = {
  key: readFile.readFileSync('key.pem'),
  cert: readFile.readFileSync('cert.pem')
};

let indexFile;

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(indexFile);
};

const server = https.createServer(options, requestListener);

fs.readFile(__dirname + "/index.html")
    .then(contents => {
        indexFile = contents;
        server.listen(port, host, () => {
            console.log(`Server is running on https://${host}:${port}`);
        });
    })
    .catch(err => {
        console.error(`Could not read index.html file: ${err}`);
        process.exit(1);
    });

