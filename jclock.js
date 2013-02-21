/***************************
*   jClock v1.1.0 rev. 4   *
*          2-20-13         *
***************************/

//Hey, all you source viewers!

function initialSet(){
  //Currently deprecated, though this may return in a later version
  /*
  //Append footer information to page
  try {
    var jClockFooter = document.createElement("p");
    jClockFooter.id = "jclockfooter";
    document.getElementById("footer").appendChild(jClockFooter);
  } catch (err){
    var jClockFooter = document.createElement("div");
    jClockFooter.id = "jclockfooter";
    document.body.appendChild(jClockFooter);
    document.getElementById("jclockfooter").style.cssText = "font-size:12px;font-family:Arial;text-align:center;";
  }
  document.getElementById("jclockfooter").innerHTML = "<a href='http://techgeek01.github.com/jclock' target='_blank'>jClock</a> v1.1.0";
  */
}

(function(){
  //Set static variables
  var today = new Date();
  var staticYear = today.getFullYear();
  var staticMonth = today.getMonth();
  var staticDate = today.getDate();
  
  //Start clocks
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
    if (h12 > 11){
      var state = "PM";
    } else {
	  var state = "AM";
	}
    if (h12 > 12){
      h12 = h12 - 12;
    }
	
	//If any floating clocks exist, style the first one by priority
    try {
      document.getElementById("float12clockdark").innerHTML = h12 + ":" + m + " " + state;
      floatStyle("float12clockdark");
    } catch (err){
      try {
        document.getElementById("float12clock").innerHTML = h12 + ":" + m + " " + state;
        floatStyle("float12clock");
      } catch (err){
        try {
          document.getElementById("float24clockdark").innerHTML = h24 + ":" + m;
          floatStyle("float24clockdark");
        } catch (err){
          try {
            document.getElementById("float24clock").innerHTML = h24 + ":" + m;
            floatStyle("float24clock");
          } catch (err){}
        }
      }
    }
	
	replaceContent("\x6A\x63\x6C\x6F\x63\x65\x61\x73\x74\x65\x72\x65\x67\x67","\x6A\x43\x6C\x6F\x63\x6B\x20\x69\x73\x20\x61\x77\x65\x73\x6F\x6D\x65\x21");
	//replaceContent("\x65\x61\x73\x74\x65\x72\x65\x67\x67","&#106;&#67;&#108;&#111;&#99;&#107;&#32;&#105;&#115;&#32;&#97;&#119;&#101;&#115;&#111;&#109;&#101;&#33;");
    replaceContent("24clock",h24 + ":" + m +":" + s);
    replaceContent("12clock",h12 + ":" + m + ":" + s + " " + state);
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
    var verticalFloatPos = viewport("height")-59;
    verticalFloatPos = verticalFloatPos.toString();
	horizontalFloatPos = 0;
    if (i === "float24clock" || i === "float12clock"){
      var clockColor = "ffffff";
    } else {
	  var clockColor = "000000";
	}
      document.getElementById(i).style.cssText = "font-size:50px;color:#" + clockColor + ";font-family:arial;position:fixed;top:" + verticalFloatPos + "px;left:10px;z-index:200;";
  }
}());
