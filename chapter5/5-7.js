var fs = require('fs');

fs.open('/Users/liuht/code/itbilu/demo/fs.js', 'r', function (err, fd) {
    var readBuffer = new Buffer(1024),
	offset = 0,
	len = readBuffer.length,
	filePostion = 100;
    fs.read(fd, readBuffer, offset, len, filePostion, function(err, readByte){
	console.log('读取数据总数：'+readByte+' bytes' );		
	// ==>读取数据总数
        console.log(readBuffer.slice(0, readByte));     //数据已被填充到readBuffer中
    })
})
