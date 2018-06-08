var fs = require('fs');

function mkdir(path, callback) {
  var pathArr = path.toString().split('/');
  for(var i = 1; i < pathArr.length; i++) {
    var newPath = pathArr.slice(0,i+1).join('/');
    var exists = fs.existsSync(newPath);
    if(!exists) {
      fs.mkdirSync(newPath);
    }

  }
  callback && callback();
}

module.exports = mkdir;
