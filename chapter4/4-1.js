const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200,{
        'content-type': 'text/plain'
    });
    res.end('Hello, Node.js!');
});
server.listen(3000, function() {
    console.log('listening port 3000');
});