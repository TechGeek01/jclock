function startTime(){
  var today=new Date();
  var month=today.getMonth();
  var month=month+1
  var date=today.getDate();
  var year=today.getYear();
  var h24=today.getHours();
  var h12=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  //add a zero in front of numbers less than 10
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
