var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello this is a Node.js)');

}).listen(process.env.PORT);


var pjson = require('./package.json');
console.log(pjson.version); //** log version
