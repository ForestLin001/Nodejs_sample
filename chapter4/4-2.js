const http = require('http');
const server = new http.Server();

server.on('request', function(req, res) {
    res.writeHead(200,{
        'content-type': 'text/plain'
    });
    res.end('Hello, Node.js!');
});

server.listen(3000, function() {
    console.log('listening port 3000');
});