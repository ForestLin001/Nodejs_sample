var fs = require('fs');

fs.open('/Users/liuht/code/itbilu/demo/fs.js', 'r', function (err, fd) {
    var readBuffer = new Buffer(1024),
	offset = 0,
	len = readBuffer.length,
	filePostion = 100;
    fs.read(fd, readBuffer, offset, len, filePostion, function(err, readByte){
	console.log('��ȡ����������'+readByte+' bytes' );		
	// ==>��ȡ��������
        console.log(readBuffer.slice(0, readByte));     //�����ѱ���䵽readBuffer��
    })
})
