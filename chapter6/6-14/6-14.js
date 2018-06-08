var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    res.writeHead(200,{
        'content-type': 'text/html'
    });
    var data = fs.readFileSync('./index.html');
    res.write(data);
    res.end();
});
server.listen(3000, function() {
    console.log('listening port 3000');
});
