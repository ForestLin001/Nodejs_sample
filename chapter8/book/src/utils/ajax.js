const ajax = function (method, url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
      if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        cb(xhr.responseText);
      }
    }
  }
};

export default ajax;