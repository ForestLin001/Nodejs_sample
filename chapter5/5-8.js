//ʹ��stringд���ļ�
fs.appendFile('message.txt', 'data to append', 'utf8', callback);
 //ʹ��bufferд���ļ�
fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});

