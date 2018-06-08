var net = require('net');
var server = net.createServer(function(socket){
    console.log('someone connects');
});