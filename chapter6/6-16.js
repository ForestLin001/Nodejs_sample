var dgram = require('dgram');
 
 var message = new Buffer('some message from server');
 
 var socket = dgram.createSocket('udp4', function (msg, rinfo) {
  console.log(msg.toString());
  socket.send(message, 0, message.length, rinfo.port, rinfo.address, function (err, bytes) {
    if(err) {
      console.log(error);
      return;
    }
    console.log("send " + bytes + ' message');
  })
 });
 
 socket.bind(41234, 'localhost', function () {
  console.log('bind 41234');
 });