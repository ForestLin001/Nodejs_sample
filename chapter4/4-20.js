const dns = require('dns');

dns.reverse('114.114.114.114', function(err, domain) {
    console.log(domain);
})