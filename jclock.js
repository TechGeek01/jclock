//Main config
function initialSet(){
  var currentVersion=1.0;
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
  if (h12>11){
    state="PM";
  }
  if (h12>12){
    h12=h12-12;
  }
  document.getElementById("float24clock").innerHTML=h24+":"+m;
  document.getElementById("float12clock").innerHTML=h12+":"+m+" "+state;
  document.getElementById("float24clockdark").innerHTML=h24+":"+m;
  document.getElementById("float12clockdark").innerHTML=h12+":"+m+" "+state;
  replaceContent("24clock",h24+":"+m+":"+s);
  replaceContent("12clock",h12+":"+m+":"+s+" "+state);
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
function extras(){
  var viewportHeight=viewport("height");
  var verticalFloatPos=viewportHeight-59;
  var verticalFloatPos=verticalFloatPos.toString();
  var verticalFloatPos=verticalFloatPos+"px";
  var float24=document.getElementById("float24clock");
  var float12=document.getElementById("float12clock");
  var float24dark=document.getElementById("float24clockdark");
  var float12dark=document.getElementById("float12clockdark");
  float24.style.fontSize="50px";
  document.getElementById("debug").innerHTML="1";
  float24.style.color="#ffffff";
  float24.style.fontFamily="arial";
  float24.style.position="fixed";
  float24.style.top=verticalFloatPos;
  float24.style.left="0px";
  float24.style.zIndex="200";
  float12.style.fontSize="50px";
  float12.style.color="#ffffff";
  float12.style.fontFamily="arial";
  float12.style.position="fixed";
  float12.style.top=verticalFloatPos;
  float12.style.left="0px";
  float12.style.zIndex="200";
  float24dark.style.fontSize="50px";
  float24dark.style.color="#000000";
  float24dark.style.fontFamily="arial";
  float24dark.style.position="fixed";
  float24dark.style.top=verticalFloatPos;
  float24dark.style.left="0px";
  float24dark.style.zIndex="200";
  float12dark.style.fontSize="50px";
  float12dark.style.color="#000000";
  float12dark.style.fontFamily="arial";
  float12dark.style.position="fixed";
  float12dark.style.top=verticalFloatPos;
  float12dark.style.left="0px";
  float12dark.style.zIndex="200";
}