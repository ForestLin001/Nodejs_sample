var fs = require('fs');
var mkdir = require('./mkdir');

function copy(src, dist) {
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
    readAble = fs.createReadStream(src);
    writeAble = fs.createWriteStream(distPath);
    readAble.pipe(writeAble);
  } else {
    var paths = fs.readdirSync(src);
    for(var i = 0; i < paths.length; i++) {
      srcPath = src + '/' + paths[i];
      distPath = dist + '/' + paths[i];
      if(fs.statSync(srcPath).isFile()) {
        readAble = fs.createReadStream(srcPath);
        writeAble = fs.createWriteStream(distPath);
        readAble.pipe(writeAble);
      } else if(fs.statSync(srcPath).isDirectory()) {
        copy(srcPath, distPath);
      }
    }
  }
}
module.exports = copy;