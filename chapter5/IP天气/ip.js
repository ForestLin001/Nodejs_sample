var fs = require('fs')
var request = require('request')
var qs = require('querystring')
//通过JSON.parse来解析IP列表中的地址
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
//通过telize的公共GEO服务来获取城市信息
function ip2geo(ip, callback) {
  var url = 'http://www.telize.com/geoip/' + ip
  request({
    url: url,
    json: true
  }, function(err, resp, body) {
    callback(err, body)
  })
}
//通过openweathermap的公共服务来获取当地的天气信息
function geo2weather(lat, lon, callback) {
  var params = {
    lat: lat,
    lon: lon,
//public key 是从openweathermap申请的开发人员的唯一key
    APPID: ‘public key'
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
//使用for循环遍历每个IP地址的信息
  for (var i = 0; i < weathers.length; i++) {
    weather = weathers[i]
    output.push({
      ip: weather.geo.ip,
      weather: weather.weather[0].main,
      region: weather.geo.region
    })
  }
//使用fs.writeFile函数将结果写入到weather.json中
  fs.writeFile('./weather.json', JSON.stringify(output, null, '  '), callback)
}
