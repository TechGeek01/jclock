function startTime(){
  var today=new Date();
  var year=today.getFullYear();
  var month=today.getMonth()+1;
  var date=today.getDate();
  var h24=today.getHours();
  var h12=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  state=h12>11&&h12<24?"PM":"AM";
  h12=h12>12?h12-12:h12;
  replaceContent("24clock",h24+":"+m+":"+s);
  replaceContent("12clock",h12+":"+m+":"+s+" "+state);
  t=setTimeout(function(){startTime()},500);
}

function replaceContent(matchClass,content){
  var elems=document.getElementsByTagName('*'),i;
  for(i in elems){
    if((" "+elems[i].className+" ").indexOf(" "+matchClass+" ")>-1){
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
