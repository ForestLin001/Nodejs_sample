var fs = require('fs');

fs.stat('/Users/liuht/code/itbilu/demo/path.js', function (err, stats) {
    console.log(stats);
})
