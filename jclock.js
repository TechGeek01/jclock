function setDate(){
  var today=new Date();
  var month=today.getMonth();
  var month=month+1
  var date=today.getDate();
  var year=today.getYear();
  startTime();
}

function startTime(){
  var h24=today.getHours();
  var h12=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  //add a zero in front of numbers less than 10
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('24clock').innerHTML=h24+":"+m+":"+s;
  var mnorev="A";
  if (h12>13){
    var h12=h12-12;
    var mnorev="P";
  }
  document.getElementById('12clock').innerHTML=h12+":"+m+":"+s+" "+mnorev+"M";
  t=setTimeout(function(){startTime()},500);
}

function checkTime(i){
  if (i<10){
    i="0"+i;
  }
  return i;
}
