var clockWidthHeight;//width and height of the clock
var clockDiv;
var secondHand;
var minuteHand;
var hourHand;
var imgsLoaded = 0;

var secondHandSpeed;
var smoothRotation = false;
var useSecondHand = true;
var imagesToLoad = 4;
var callInterval = 1000;
var retina = false;


AnalogClock = function(config){
	
	clockDiv = $("." + config.divId);
	clockWidthHeight = config.clockWidthAndHeight;
	secondHandSpeed = config.secondHandSpeed;
	
	if(config.useSecondHand == "false"){
		useSecondHand = false;
		imagesToLoad = 3;

	}	
	

	if(config.smoothRotation == "true" && useSecondHand){
		smoothRotation = true;
		callInterval = 50;
	}
	
	
	//set clock holder css
	clockDiv.css({"height":clockWidthHeight + "px", "width":clockWidthHeight + "px", "position":"relative"});
	
	clockDiv.append("<img class='bg' src=" + config.clockFaceImg + " /><img class='hourHand' src=" + config.hourHandImg + " /><img class='minuteHand' src=" + config.minuteHandImg + " />");
	if(useSecondHand)clockDiv.append("<img class='secondHand' src=" + config.secondHandImg + " />");
	$(".bg").css({"height":clockWidthHeight + "px", "width":clockWidthHeight + "px", "position":"relative"});

	//define elements
	if(useSecondHand)secondHand = $(".secondHand");
	minuteHand = $(".minuteHand");
	hourHand = $(".hourHand");
	
	//check to see if the images are loaded
	$('.bg').load(function() {   checkIfImagesLoaded();  });
	if(useSecondHand)secondHand.load(function() {   checkIfImagesLoaded();  });
	minuteHand.load(function() {   checkIfImagesLoaded();  });
	hourHand.load(function() {   checkIfImagesLoaded();  });
	
	//set clock css
	var handIds = $("." + config.divId + " .bg, .hourHand, .minuteHand, .secondHand");
	handIds.css({"position":"absolute", "display":"none","height":clockWidthHeight + "px"});
	//handIds.css({"position":"absolute"});
	
	
};


function checkIfImagesLoaded(){
	
	imgsLoaded++;
	if(imgsLoaded == imagesToLoad){//once all the images are loaded
		
		if(useSecondHand)secondHand.css( { "left": (clockWidthHeight - secondHand.width())/2 + "px", "top": (clockWidthHeight - secondHand.height())/2 + "px" });//set x and y pos
		minuteHand.css( { "left": (clockWidthHeight - minuteHand.width())/2 + "px", "top": (clockWidthHeight - minuteHand.height())/2 + "px" });//set x and y pos
		hourHand.css( { "left": (clockWidthHeight - hourHand.width())/2 + "px", "top": (clockWidthHeight - hourHand.height())/2 + "px" });//set x and y pos		
		if(useSecondHand)setSecondStart();
		
		//clockDiv.fadeIn();//fade it in
		clockDiv.find('img').fadeIn();
		//minuteHand.css({"display":"none"});
	
		//call rotatehands function

		setInterval(function(){

		

			rotateHands();

			

		}, callInterval);//1000 = 1 second

			

		rotateHands();//make sure they start in the right position
		
	}
	
}

function setSecondStart(){
	var now = new Date();
	var secondAngle = 6 * now.getSeconds();//turn the time into angle

	secondHand.rotate(secondAngle, 'abs');//set the hand angle
}


function rotateHands(){
	
	//get current time/date from local computer

	var now = new Date();

		

	//set the second hand
	

	var secondAngle = 6 * now.getSeconds();//turn the time into angle
	if(useSecondHand){
		
		if(smoothRotation){
			var smoothSecondAngle = now.getMilliseconds()/1000 * 6 + secondAngle;
			secondHand.rotate(smoothSecondAngle, 'abs');//set the hand angle
		}else{

			if(secondAngle == 0){
				secondHand.rotate(-6, 'abs');//set the hand angle
			}
			secondHand.rotate({ animateTo:secondAngle, duration:secondHandSpeed}, 'abs');
		}
	}
	
	//set the minute hand

	var minuteAngle = 6 * now.getMinutes() + secondAngle/60;//turn the time into angle

	minuteHand.rotate(minuteAngle, 'abs');//set the hand angle
	
	//set the hour hand
	var hourAngle = 360/12 * now.getHours();//turn the time into angle

	hourHand.rotate((hourAngle + minuteAngle/12)%360, 'abs');//set the hand angle
		
}