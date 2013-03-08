/***************************
*   jClock v1.2.1 rev. 2   *
*         3-7-13           *
***************************/

//Hey, all you source viewers!

function initialSet(){
  //Placeholder to prevent empty function errors
  var placeholder = true;
  
  /*
  //Check for config presence
  if (document.getElementById("jclockconfig")){
    //Set placeholder used in other functions
    var config = true;
	
	//Hide config
    document.getElementById("jclockconfig").style = "display:none;";
	
	//Import parameters
	var beta = configSetting("data-beta", true);
  }
  
  //Handle beta features
  if (beta = "yes"){
    //Append footer information to page
	if (document.getElementById("footer")){
	  var jClockFooter = document.createElement("p");
	  jClockFooter.id = "jclockfooter";
	  document.getElementById("footer").appendChild(jClockFooter);
	} else {
	  var jClockFooter = document.createElement("div");
	  jClockFooter.id = "jclockfooter";
	  document.body.appendChild(jClockFooter);
	  document.getElementById("jclockfooter").style.cssText = "font-size:12px;font-family:Arial;text-align:center;";
	}
	document.getElementById("jclockfooter").innerHTML = "<a href='http://techgeek01.github.com/jclock' target='_blank'>jClock</a> v1.2.1";
  }
  */
}

(function(){
  //Set static variables
  var today = new Date();
  var staticYear = today.getFullYear();
  var staticMonth = today.getMonth();
  var staticDate = today.getDate();
  
  //Default parameters
  var config = false;
  var beta = false;
  
  //Start clocks
  startTime();
  
  //Calculate and set clock times
  function startTime(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
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
	replaceContent("24clock",h24 + ":" + m);
    replaceContent("12clock",h12 + ":" + m + " " + state);
    replaceContent("24clocksec",h24 + ":" + m +":" + s);
    replaceContent("12clocksec",h12 + ":" + m + ":" + s + " " + state);
    t = setTimeout(function (){startTime();},500);
  }
  
  //Check if parameters are valid
  function paramCheck(parameter, successFunction){
    if (parameter !== false){
	  successFunction();
	}
  }
  
  //Check the value of config settings
  function configSetting(i, yesNo){
    if (config === true && document.getElementById("jclockconfig").getAttribute(i)){
      if (yesNo === true){
        if (document.getElementById("jclockconfig").getAttribute(i) === "yes") {
          return "yes";
		} else {
          return "no";
		}
      } else {
        return document.getElementById("jclockconfig").getAttribute(i);
      }
	} else {
	  return false
	}
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
      i = "0" + i;
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
    var verticalFloatPos = viewport("height")-64;
    verticalFloatPos = verticalFloatPos.toString();
    if (i === "float24clock" || i === "float12clock"){
      var clockColor = "ffffff";
    } else {
      var clockColor = "000000";
    }
    document.getElementById(i).style.cssText = "font-size:55px;color:#" + clockColor + ";font-family:'Myriad Pro', Calibri, Helvetica, Arial, sans-serif;position:fixed;top:" + verticalFloatPos + "px;left:10px;z-index:200;";
  }
}());