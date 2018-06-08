var net = require('net');
var client = net.Socket();

client.connect(18001, '127.0.0.1', function(){
    console.log('connect the server');
});

client.on('data', function(data) {
   console.log('the data of server is ' + data.toString());
});