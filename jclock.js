/***************************
*   jClock v1.0.5 rev. 0   *
*          2-7-13          *
***************************/

(function(){
  //Set static variables and start clock
  var today = new Date();
  var staticYear = today.getFullYear();
  var staticMonth = today.getMonth();
  var staticDate = today.getDate();
  
  var jClockFooter = document.createElement("div");
  jClockFooter.id = "jclockfooter";
  var jClockLink = document.createElement("a");
  jClockLink.setAttribute("href","http://www.techgeek01.com");
  jClockLink.setAttribute("target","_blank");
  jClockLink.innerHTML = "jClock";
  jClockVersion = document.createElement("span");
  jClockVersion.id = "jclockver";
  jClockVersion.innerHTML = " v1.0.5";
  document.body.appendChild(jClockFooter);
  document.getElementById("jclockfooter").appendChild(jClockLink);
  document.getElementById("jclockfooter").appendChild(jClockVersion);
  
  startTime();

  //Calculate and set clock times
  function startTime(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var date = today.getDate();
    var h24 = today.getHours();
    var h12 = today.getHours();
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());
    var state = "AM";
    if (h12 > 11){
      state = "PM";
    }
    if (h12 > 12){
      h12 = h12 - 12;
    }
    try {
      document.getElementById("float24clock").innerHTML = h24 + ":" + m;
    } catch (err){}
    try {
      document.getElementById("float12clock").innerHTML = h12 + ":" + m + " " + state;
    } catch (err){}
    try {
      document.getElementById("float24clockdark").innerHTML = h24 + ":" + m;
    } catch (err){}
    try {
      document.getElementById("float12clockdark").innerHTML = h12 + ":" + m + " " + state;
    } catch (err){}
    replaceContent("24clock",h24 + ":" + m +":" + s);
    replaceContent("12clock",h12 + ":" + m + ":" + s + " " + state);
    floatStyle("float24clock");
    floatStyle("float12clock");
    floatStyle("float24clockdark");
    floatStyle("float12clockdark");
    t = setTimeout(function (){startTime();},500);
  }

  //Change the innerHTML of any item with class matchClass to content
  function replaceContent(matchClass, content){
    var elems = document.getElementsByTagName('*'),i;
    for (i in elems){
      if ((" " + elems[i].className + " ").indexOf(" " + matchClass + " ") > -1){
        elems[i].innerHTML = content;
      }
    }
  }

  //Add 0 in front of minutes and seconds less than 10
  function checkTime(i){
    if (i < 10){
      i = "0"+i;
    }
    return i;
  }

  //Detect the veiwport dimmensions in-browser
  function viewport(i){
    if (i === "width"){
      return document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    } else if (i === "height"){
      return document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight;
    }
  }

  //Process the floating clock types
  function floatStyle(i){
    var viewportHeight = viewport("height");
    var verticalFloatPos = viewportHeight-59;
    verticalFloatPos = verticalFloatPos.toString();
    var clockColor = "000000";
    if(i === "float24clock" || i === "float12clock"){
      clockColor = "ffffff";
    }
    try{
      document.getElementById(i).style.cssText = "font-size:50px;color:#" + clockColor + ";font-family:arial;position:fixed;top:" + verticalFloatPos + "px;left:10px;z-index:200;";
    } catch (err){}
  }
}());
