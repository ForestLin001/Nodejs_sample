var path = require('path');
//�Ϸ����ַ�������
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// ���Ӻ�
'/foo/bar/baz/asdf'

//���Ϸ����ַ������׳��쳣
path.join('foo', {}, 'bar')
// �׳����쳣
TypeError: Arguments to path.join must be strings'
