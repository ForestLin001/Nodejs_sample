var fs = require('fs');

function touch(path, callback) {
  var pathArr = path.toString().split('/');
  for(var i = 1; i < pathArr.length; i++) {
    var newPath = pathArr.slice(0,i+1).join('/');
    var exists = fs.existsSync(newPath);
    if(exists) {
      return;
    }
    if(i === (pathArr.length - 1)) {
      var fd = fs.openSync(newPath, 'w');
      fs.closeSync(fd);
    } else{
      fs.mkdirSync(newPath);
    }
  }
  callback && callback();
}

module.exports = touch;