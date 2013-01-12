function startTime(){
  var today=new Date();
  var year=today.getFullYear();
  var month=today.getMonth()+1;
  var date=today.getDate();
  var h24=today.getHours();
  var h12=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  var state="AM";
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('24clock').innerHTML=h24+":"+m+":"+s;
  if(h12>11&&h12<24){
    var state="PM";
  }
  if(h12>12){
    var h12=h12-12;
  }
  document.getElementById('12clock').innerHTML=h12+":"+m+":"+s+" "+state;
  t=setTimeout(function(){startTime()},500);
}

function checkTime(i){
  if(i<10){
    i="0"+i;
  }
  return i;
}
