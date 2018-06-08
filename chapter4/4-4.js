const http = require('http');
let reqData = '';
http.request({
    'host': '127.0.0.1',
    'port': '3000',
    'method': 'get'
}, function(res) {
    res.on('data', function(chunk) {
        reqData += chunk;
    });
    res.on('end', function() {
        console.log(reqData);
    });
}).end();
