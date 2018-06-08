var mkdir = require('./libs/mkdir');
var remove = require('./libs/remove');
var rmdir = require('./libs/rmdir');
var touch = require('./libs/touch.js');
var copy = require('./libs/copy.js');
var cut = require('./libs/cut.js');


module.exports = {
  mkdir: mkdir,
  remove: remove,
  rmdir: rmdir,
  touch: touch,
  copy: copy,
  cut: cut
};