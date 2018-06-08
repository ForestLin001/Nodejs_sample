const util = require('util');

util.format('%s is %d', 'huruji', 12);
// huruji is 12

util.format('%s is a %s%s', 'huruji', 'FE');
// huruji is a FE%s

util.format('%s is a', 'huruji', 'FE');
// huruji is a FE

util.format('huruji', 'is', 'a', 'FE');
// huruji is a FE