var fs = require('fs');
var mkdir = require('./mkdir');

function cut(src, dist) {
  var existsSrc = fs.existsSync(src);
  var existsDist = fs.existsSync(dist);
  var filename, distPath, srcPath, readAble, writeAble;
  if(!existsSrc) {
    return;
  }
  if(!existsDist) {
    mkdir(dist);
  }
  if(fs.statSync(src).isFile()) {
    filename = src.toString().match(/\/([^\/]+)$/g)[0];
    distPath = dist + filename;
    fs.renameSync(src, distPath);
  } else {
    var paths = fs.readdirSync(src);
    for(var i = 0; i < paths.length; i++) {
      srcPath = src + '/' + paths[i];
      distPath = dist + '/' + paths[i];
      fs.renameSync(srcPath, distPath);
    }
  }
}

module.exports = cut;
