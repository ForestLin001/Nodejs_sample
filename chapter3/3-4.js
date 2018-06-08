function a() {
var str = 'node.js';
    return function() {
        var str2 = str + ' is poserful';
        return str2;
    }
}

