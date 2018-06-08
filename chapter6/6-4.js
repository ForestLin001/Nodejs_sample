var net = require('net');

var server = new net.Server();

server.on('connection', function(socket) {
    console.log('someone connects');
});

server.listen(18001);

server.on('listening', function() {
    console.log('server is listening');
});

server.on('close', function() {
    console.log('server closed');
});

server.on('error', function(err) {
    console.log('error');
});
