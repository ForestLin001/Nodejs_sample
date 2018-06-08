var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('./mime');
var path = require('path');

var server = http.createServer(function(req, res) {
    var filePath = '.' + url.parse(req.url).pathname;
    if(filePath === './'){
        filePath = './index.html';
    }
    fs.exists(filePath,function(exist){
        if(exist) {
            var data = fs.readFileSync(filePath);
            var contentType = mime[path.extname(filePath)];
            res.writeHead(200,{
                'content-type': contentType
            });
            res.write(data);
            res.end();
        }else{
            res.end('404');
        }
    })
});

server.listen(3000, function() {
    console.log('listening port 3000');
});
