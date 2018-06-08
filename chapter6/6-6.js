var net = require('net');

var server = net.createServer(function(socket){
    console.log('someone connects');
    server.maxConnections = 3;
    server.getConnections(function(err, count) {
        console.log('the count of client is ' + count);
    });
});

server.listen(18001,function() {
    console.log('server is listening');
});
