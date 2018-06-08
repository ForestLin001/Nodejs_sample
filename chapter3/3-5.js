const obj = {
name: 'node.js',
    get: function() {
      console.log('get');
    },
    set: function() {
      console.log('set');
    }
}
console.dir(obj);

