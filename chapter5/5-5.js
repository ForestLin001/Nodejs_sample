var fs = require('fs');

// ���ļ�
console.log("׼�����ļ���");
fs.open('text.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log('�ɹ����ļ�');     
});
