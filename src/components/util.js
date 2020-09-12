export function timeConverter(UNIX_timestamp, d = true){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var day = days[a.getDay()]
    var time;
    d ? (time = date + '-' + month + '-' + year + ' ' + day) :(time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec)
    return time;
  }