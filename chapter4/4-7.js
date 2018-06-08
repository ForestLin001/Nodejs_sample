const url = require('url');
let parseUrl = 'https://www.google.com/?q=node.js';

let urlObj = url.parse(parseUrl);
console.log(urlObj);