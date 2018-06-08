var fs = require('fs');

function rmdir(path, callback) {
  var exists = fs.existsSync(path);
  if(!exists) {
    return;
  }
  var files = fs.readdirSync(path);
  for(var i = 0; i < files.length; i++) {
    var curPath = path + '/' + files[i];
    if(fs.statSync(curPath).isDirectory()) {
      rmdir(curPath)
    } else {
      fs.unlinkSync(curPath);
    }
  }
  fs.rmdirSync(path);
  callback && callback();
}

module.exports = rmdir;