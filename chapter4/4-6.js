const http = require('http');
let reqData = '';
let option= {
    'host': '127.0.0.1',
    'port': '3000'
};

const req = http.request(option);

req.on('response', function(res) {
    res.on('data', function(chunk) {
        reqData += chunk;
    });
    res.on('end', function() {
        console.log(reqData);
    });
});