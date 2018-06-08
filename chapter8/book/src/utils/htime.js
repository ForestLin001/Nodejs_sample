const htime = {
  getDiff: function(num){
    let time;
    if(num){
      time = new Date(new Date().getTime() - num*24*60*60*1000);
    }else{
      time = new Date();
    }
    return this.parseTime(time);
  },
  parseTime: function(time) {
    let year = time.getFullYear();
    let month = time.getMonth() + 1 > 9 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1);
    let day = time.getDay() > 9 ? time.getDay(): '0' + time.getDay();
    return year + '-' + month + '-' + day;
  }
};

export default htime;