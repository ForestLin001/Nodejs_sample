const fs = require('fs');

//异步操作读取文件
fs.unlink('./tmp/hello', (err) => {
  if (err) throw err;
  console.log('successfully deleted ./tmp/hello');
});
