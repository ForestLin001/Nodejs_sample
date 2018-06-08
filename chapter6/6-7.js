var net = require('net');

var server = net.createServer(function(socket){
    socket.on('data',function(data){
        console.log(data.toString());
    });
});

server.listen(18001,function() {
    console.log('server is listening');
});
