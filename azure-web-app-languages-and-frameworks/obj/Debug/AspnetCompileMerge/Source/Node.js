var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello this is a Node.js)');

}).listen(process.env.PORT);

