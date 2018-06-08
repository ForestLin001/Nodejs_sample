var path = require('path');
//合法的字符串连接
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// 连接后
'/foo/bar/baz/asdf'

//不合法的字符串将抛出异常
path.join('foo', {}, 'bar')
// 抛出的异常
TypeError: Arguments to path.join must be strings'
