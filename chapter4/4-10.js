const querystring = require('querystring');
let str = 'keyWord=node.js&name=huruji';

let obj = querystring.parse(str);
console.log(obj);