var fs = require('fs')
var request = require('request')
var qs = require('querystring')
//ͨ��JSON.parse������IP�б��еĵ�ַ
function readIP(path, callback) {
  fs.readFile(path, function(err, data) {
    if (err) {
      callback(err)
    } else {
      try {
        data = JSON.parse(data)
        callback(null, data)
      } catch (error) {
        callback(error)
      }
    }
  })
}
//ͨ��telize�Ĺ���GEO��������ȡ������Ϣ
function ip2geo(ip, callback) {
  var url = 'http://www.telize.com/geoip/' + ip
  request({
    url: url,
    json: true
  }, function(err, resp, body) {
    callback(err, body)
  })
}
//ͨ��openweathermap�Ĺ�����������ȡ���ص�������Ϣ
function geo2weather(lat, lon, callback) {
  var params = {
    lat: lat,
    lon: lon,
//public key �Ǵ�openweathermap����Ŀ�����Ա��Ψһkey
    APPID: ��public key'
  }
  var url = 'http://api.openweathermap.org/data/2.5/weather?' + qs.stringify(params)
  request({
    url: url,
    json: true,
  }, function(err, resp, body) {
    callback(err, body)
  })
}
function geos2weathers(geos, callback) {
  var weathers = []
  var geo
  var remain = geos.length
  for (var i = 0; i < geos.length; i++) {
    geo = geos[i];
    (function(geo) {
      geo2weather(geo.latitude, geo.longitude, function(err, weather) {
        if (err) {
          callback(err)
        } else {
          weather.geo = geo
          weathers.push(weather)
          remain--
        }
        if (remain == 0) {
          callback(null, weathers)
        }
      })
    })(geo)
  }
}
function writeWeather(weathers, callback) {
  var output = []
  var weather
//ʹ��forѭ������ÿ��IP��ַ����Ϣ
  for (var i = 0; i < weathers.length; i++) {
    weather = weathers[i]
    output.push({
      ip: weather.geo.ip,
      weather: weather.weather[0].main,
      region: weather.geo.region
    })
  }
//ʹ��fs.writeFile���������д�뵽weather.json��
  fs.writeFile('./weather.json', JSON.stringify(output, null, '  '), callback)
}
