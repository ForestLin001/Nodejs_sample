var cvs = require('CSV');

var generator = CSV.generate({seed: 1, columns: 2, length: 20});
var parser = CSV.parse();
var transformer = CSV.transform(function(data){
  return data.map(function(value){return value.toUpperCase()});
});
var stringifier = CSV.stringify();

generator.on('readable', function(){
  while(data = generator.read()){
    parser.write(data);
  }
});
//�������ɵĶ�CSV�ļ�
parser.on('readable', function(){
  while(data = parser.read()){
    transformer.write(data);
  }
});
//��CSV�ļ�ת��txt�ļ�
transformer.on('readable', function(){
  while(data = transformer.read()){
    stringifier.write(data);
  }
});

stringifier.on('readable', function(){
  while(data = stringifier.read()){
    process.stdout.write(data);
  }
});
