var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = evening;
var partytime;
var evening = 20;

var showCurrentTime = function()
{
    
    var clock = document.getElementById("clock");
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
   
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
  
  
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
   
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    var clockTime = hours + " " + ':' + " " + minutes +  " " +':'+ " "  + seconds + " " +" " + meridian ;
 
    clock.innerText = clockTime;
};


var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "lunch_image.png";
  var display="Good Morning!!";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  var down3Js=document.getElementById("down3")

   if (time == wakeuptime)
  {
    image = "mrng image.jpg";
    messageText = "Lets have some breakfast!!";
    display="Good Morning!!"
  }
  else if (time == lunchtime)
  {
    image = "afternoonimage.png";
    messageText = "Let's have some lunch!!";
    display="Good Afternoon!!"
  }
  else if (time >= evening)
  {
    image = "napimage.png";
    messageText = "Good Night!!";
    display="Good Night!!"
  }
  else if (time < noon)
  {
    image = "mrng image.png";
    messageText = "Lets have some breakfast!!";
    display="Good Morning!!"
  }
else if(time>=evening&&time<=naptime)
{
  image = "eveningimage.jpeg";
  messageText = "Good Evening!!";
  display="Good Evening!!"
}
  
  else 
  {
    image = "lunch_image.png";
    messageText = "Lets have some lunch!!";
    display="Good Afternoon!!"

  }


  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;
  down3Js.innerText=display
  
  showCurrentTime();
};
updateClock();


var oneSecond = 1000;
setInterval( updateClock, oneSecond);



var partyButton = document.getElementById("down");

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{

    wakeuptime = wakeUpTimeSelector.value;

  
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;

};

lunchTimeSelector.addEventListener("change", lunchEvent);

var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);


function getOption() {
 
var d=document.getElementById("wakeUpTimeSelector").value;
var value1=d.slice(0,4);
  
var d1=document.getElementById("lunchTimeSelector").value;
var value2=d1.slice(0,4);
  
var d2=document.getElementById("napTimeSelector").value;
var value3=d2.slice(0,4);
  if(d=="")
  {

  }
  else{
    document.getElementById("a6").innerText="wake up time:"+d;

  }
    
  if(d1=="")
  {

  }
  else{
    document.getElementById("a3").innerText="lunch time:"+d1;
  }
    
  if(d2=="")
  {

  }
  else
  {
    document.getElementById("a7").innerText="dinner time:"+d2;
  }
}


