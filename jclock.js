//Main config
function initialSet(){
  var currentVersion=0.6;
  var today=new Date;
  var staticYear=today.getFullYear();
  var staticMonth=today.getMonth();
  var staticDate=today.getDate();
  startTime();
}

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
  if (h12>11 && h12<24){
    state="PM";
  }
  if (h12>12){
    h12=h12-12;
  }
  replaceContent("24clock", h24+":"+m+":"+s);
  replaceContent("12clock", h12+":"+m+":"+s+" "+state);
  t=setTimeout(function (){startTime();},500);
}

function replaceContent(matchClass, content){
  var elems=document.getElementsByTagName('*'),i;
  for (i in elems){
    if ((" "+elems[i].className+" ").indexOf(" "+matchClass+" ")>-1){
      elems[i].innerHTML=content;
    }
  }
}

function checkTime(i){
  if (i<10){
    i="0"+i;
  }
  return i;
}

function viewport(i){
  if(i="width"){
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }else if(i="height"){
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
}

//Extras
