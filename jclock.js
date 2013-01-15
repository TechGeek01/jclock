//Main config
function initialSet(){
  var currentVersion=1.0;
  var today=new Date();
  var staticYear=today.getFullYear();
  var staticMonth=today.getMonth();
  var staticDate=today.getDate();
  extras();
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
  try{
    document.getElementById("float24clock").innerHTML=h24+":"+m;
  }catch(err){}
  try{
    document.getElementById("float12clock").innerHTML=h12+":"+m+" "+state;
  }catch(err){}
  try{
    document.getElementById("float24clockdark").innerHTML=h24+":"+m;
  }catch(err){}
  try{
    document.getElementById("float12clockdark").innerHTML=h12+":"+m+" "+state;
  }catch(err){}
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
  if(i==="width"){
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }else if(i==="height"){
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }
}

//Extras
function extras(){
  var viewportHeight=viewport("height");
  var verticalFloatPos=viewportHeight-59;
  var verticalFloatPos2=verticalFloatPos.toString();
  var verticalFloatPos3=verticalFloatPos2+"px";
  try{
    document.getElementById("float24clock").style.cssText="font-size:50px;color:#ffffff;font-family:arial;position:fixed;left:10px;z-index:200;";
    document.getElementById("float24clock").style.top=verticalFloatPos3;
  }catch(err){}
  try{
    document.getElementById("float12clock").style.cssText="font-size:50px;color:#ffffff;font-family:arial;position:fixed;left:10px;z-index:200;";
    document.getElementById("float12clock").style.top=verticalFloatPos3;
  }catch(err){}
  try{
    document.getElementById("float24clockdark").style.cssText="font-size:50px;color:#000000;font-family:arial;position:fixed;left:10px;z-index:200;";
    document.getElementById("float24clockdark").style.top=verticalFloatPos3;
  }catch(err){}
  try{
    document.getElementById("float12clockdark").style.cssText="font-size:50px;color:#000000;font-family:arial;position:fixed;left:10px;z-index:200;";
    document.getElementById("float12clockdark").style.top=verticalFloatPos3;
  }catch(err){}
  
}