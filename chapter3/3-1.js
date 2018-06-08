var a;
var b = 12;
var c = 'node.js';
var d = true;
var e = function() {
    
}
var f = null;
var g = {
    num: 12
}
var arr = [a,b,c,d,e,f,g];
for(var i = 0, max = arr.length; i < max; i++) {
    console.log(typeof arr[i]);
}

// undefined
// number
// string
// boolean
// function
// object
// object
