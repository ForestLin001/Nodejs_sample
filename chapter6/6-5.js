var net = require('net');

var server = net.createServer(function(socket){
    console.log('someone connects');
});

server.listen(18001,function() {
    var address = server.address();
    console.log('the port of server is ' + address.port);
    console.log('the address of server is ' + address.address);
    console.log('the famaily of server is ' + address.family);
});
