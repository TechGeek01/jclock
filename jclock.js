function startTime(){
  var today=new Date();
  var year=today.getFullYear();
  var month=today.getMonth()+1;
  var date=today.getDate();
  var year=today.getYear();
  var h24=today.getHours();
  var h12=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('24clock').innerHTML=h24+":"+m+":"+s;
  t=setTimeout(function(){startTime()},500);
}

function checkTime(i){
  if (i<10){
    i="0"+i;
  }
  return i;
}
