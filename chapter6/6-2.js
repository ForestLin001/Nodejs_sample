var net = require('net');

var server = net.createServer(function(socket){
    console.log('someone connects');
});

server.listen(18001,function() {
    console.log('server is listening');
});
