const dns = require('dns');

let domain = 'baidu.com';

dns.lookup(domain, function(err, address) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(address);
})