var net = require('net');

var server = net.createServer(function(socket){
    var address = server.address();
    var message = 'client, the server address is ' + JSON.stringify(address);
    socket.write(message,function(){
        var writeSize = socket.bytesWritten;
       console.log(message + 'has send');
       console.log('the size of message is ' + writeSize);
    });
    socket.on('data',function(data){
        console.log(data.toString());
        var readSize = socket.bytesRead;
        console.log('the size of data is ' + readSize);
    });
});

server.listen(18001,function() {
    console.log('server is listening');
});
