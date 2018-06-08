const url = require('url');

let urlObj = {
    'host': 'www.google.com',
    'port': 80,
    'protocol': 'https',
    'search':'?q=node.js',
    'query': 'q=node.js',
    'path': '/'
};
let urlAdress = url.format(urlObj);
console.log(urlAdress);