console.time('total time');

console.time('time1');
for(var i =0; i< 10000; i++) {

}
console.timeEnd('time1');

console.time('time2');
for(var i =0; i< 100000; i++) {

}
console.timeEnd('time2');

console.timeEnd('total time');
