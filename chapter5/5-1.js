const fs = require('fs');

//�첽������ȡ�ļ�
fs.unlink('./tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted ./tmp/hello');
});
