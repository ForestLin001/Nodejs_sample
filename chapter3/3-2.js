var a;
var a;
var b = null;
var c = 0;
var d = '';
var e = NaN;
var arr = [a,b,c,d,e];
for(var i = 0, max = arr.length; i < max; i++) {
    console.log(Boolean(arr[i]));
}

// false
// false
// false
// false
// false

