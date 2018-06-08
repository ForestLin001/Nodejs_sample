/*var dgram = require('dgram');

var socket = dgram.createSocket('udp4');

socket.bind(41234, 'localhost', function () {
  console.log('bind 41234');
});
socket.on('message', function (msg, rinfo) {
  console.log(msg.toString());
});
socket.on('listening', function() {
  console.log('listening begin');
});
socket.on('close', function(){
  console.log('server closed');
});
socket.on('error', function (err) {
  console.log(err);
});*/

/*var dgram = require('dgram');

var message = new Buffer('some message');

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
});*/
var dgram = require('dgram');

var message = new Buffer('some message from client');
var socket = dgram.createSocket('udp4');

socket.send(message, 0, message.length, 41234, 'localhost', function (err, bytes) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('client send ' + bytes + 'message');
});

socket.on('message', function (msg, rinfo) {
  console.log("some message form server");
});
