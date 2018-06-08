const querystring = require('querystring');
let obj = {
    keyWord: 'node.js',
    name: 'huruji'
};

let str = querystring.stringify(obj);
console.log(str);