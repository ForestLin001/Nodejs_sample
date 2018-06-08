var fsEasy = require('./../../index');
console.log(fsEasy.touch);
fsEasy.touch('./hu/ruji/index.js',function(){
  console.log('success');
});