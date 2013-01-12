function startTime(){
  var today=new Date();
  var htwentyfour=today.getHours();
  var htwelve=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('24clock').innerHTML=htwentyfour+":"+m+":"+s;
  var mnorev="A";
  if (htwelve>13){
    var htwelve=htwelve-12;
    var mnorev="P";
  }
  document.getElementById('12clock').innerHTML=htwelve+":"+m+":"+s+" "+mnorev+"M";
  t=setTimeout(function(){startTime()},500);
}

function checkTime(i){
  if (i<10){
    1="0"+i;
  }
  return i;
}
