function startTime(){
  var today=new Date();
  var year=today.getFullYear();
  var month=today.getMonth()+1;
  var date=today.getDate();
  var h24=today.getHours();
  var h12=today.getHours();
  var m=checkTime(today.getMinutes());
  var s=checkTime(today.getSeconds());
  var state="AM";
  if(h12>11&&h12<24){
    state="PM";
  }
  if(h12>12){
    h12=h12-12;
  }
  replaceContent("24clock",h24+":"+m+":"+s);
  replaceContent("12clock",h12+":"+m+":"+s+" "+state);
  t=setTimeout(function(){startTime()},500);
}

/*
Clock types
- 24-hour
- 12-hour


function clockType(i){
  if(i="24hour"){
    content=h24+":"+m+":"+s;
  }else if(i="12hour"){
    content=h12+":"+m+":"+s+" "+state;
  }
}
*/

function replaceContent(matchClass,content){
  var elems=document.getElementsByTagName('*'),i;
  for(i in elems){
    if((" "+elems[i].className+" ").indexOf(" "+matchClass+" ")>-1){
	  alert(i);
      elems[i].innerHTML=content;
    }
  }
}

function checkTime(i){
  if(i<10){
    i="0"+i;
  }
  return i;
}
