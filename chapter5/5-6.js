var fs = require(��fs��);

console.log("׼�����ļ���");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("�ļ��򿪳ɹ���");
 
      // �ر��ļ�
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("�ļ��رճɹ�");
      });
   });
});
