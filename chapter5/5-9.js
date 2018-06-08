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
//解析生成的额CSV文件
parser.on('readable', function(){
  while(data = parser.read()){
    transformer.write(data);
  }
});
//将CSV文件转换txt文件
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
