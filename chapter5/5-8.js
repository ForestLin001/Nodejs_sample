//使用string写入文件
fs.appendFile('message.txt', 'data to append', 'utf8', callback);
 //使用buffer写入文件
fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

