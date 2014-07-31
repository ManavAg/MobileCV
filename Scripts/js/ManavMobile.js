        function ShowClock(size)
			{		
			$(".analog-clock").html("");
        	var config = {
        		
        		/*the name of the div containing the clock*/
        		divId: "analog-clock",
        		        
        		/*set to false if you don't want to use the second hand*/		
        		useSecondHand: "true",
        		
        		/*width and height of the clock*/
        		clockWidthAndHeight: size, //window.innerWidth/2.5,
        		
        		/*location of the images*/
        		clockFaceImg: "Scripts/Pics/Clock/clockBg.png",
        		hourHandImg: "Scripts/Pics/Clock/hourHand.png",
        		minuteHandImg: "Scripts/Pics/Clock/minuteHand.png",
        		secondHandImg: "Scripts/Pics/Clock/secondHand.png", 
        		/*location of the high res images for retina display*/
        		clockFaceHighResImg: "Scripts/Pics/Clock/clockBgHighRes.png",
        		hourHandHighResImg: "Scripts/Pics/Clock/hourHandHighRes.png",
        		minuteHandHighResImg: "Scripts/Pics/Clock/minuteHandHighRes.png",
        		secondHandHighResImg: "Scripts/Pics/Clock/secondHandHighRes.png", 
        		
        		/*Set true to make hand move at steady speed*/
        		smoothRotation: "true",
        		
        		/*speed of the second hand. Lower is faster. */
        		/*Must be under 1000. */
        		/*If smooth rotation is true, this does nothing.*/
        		secondHandSpeed: "100"
        		        		
        	};
        	
        	var myAnalogClock = new AnalogClock(config);
		}
$(document).ready(function() 
{
	ShowClock(window.innerWidth/2.5);
	ResizeTabScreen();
	window.scrollTo(0,100);
	$("#iframe").html('<iframe id="MessageForm" src="http://manavagarwal1-visitorstats.jit.su/" scrolling="no" frameborder="0" style="border:none; overflow:hidden;display:block; width:'+ window.innerWidth+'px;height:'+ window.innerHeight+'px;" allowTransparency="true"></iframe>');
});
var orientation;
$(window).resize(function() {
	if ((window.innerWidth/window.innerHeight)>0.75)//if landscape
		{
			alert("Please wait while we load the Desktop version of the webCV");
			window.location="http://www.manavagarwal.net";
		}
		
//	ResizeTabScreen();
});
$(function(){
  $( ".text" ).on( "swipeleft", swipeleftHandler );
  function swipeleftHandler( event ){
    $.mobile.changePage( "#Main", { transition: "slideleft", changeHash: false });
  }
});
$(function(){
  $( ".text" ).on( "swiperight", swiperightHandler );
  function swiperightHandler( event ){
    $.mobile.changePage( "#Main", { transition: "slideright", changeHash: false });
  }
});
function ResizeTabScreen()
{
        $("body").css("height",1.08*$(window).height()+"px");
		//$(".signature").css("margin-top", 0.05*$(window).height()+"px");
		$(".qicons").css("width", 0.19*$(window).width()+"px");
		$(".contactIcons").css("width", 0.17*$(window).width()+"px");
        $(".apps1").css("font-size", 0.04*$(window).width()+"px");
		$(".apps2").css("font-size", 0.04*$(window).width()+"px");
        $(".quickapps").css("font-size", 0.04*$(window).width()+"px");
		$(".text").css("max-height", 0.8*$(window).height()+"px");
		$(".signature").css("margin-right",0.1*($(".signature").width())+"px");
		$(".signature").css("font-size",0.04*$(window).width()+"px");
		$(".ContactName").css("font-size",0.04*$(window).width()+"px");
//		$(".signature").css("margin-top",0.5*($("#Sign").height()-$(".signature").height())+"px");
		$(".apps1").css("margin-top", 0.1*($(window).height()-$("#Sign").height())+"px");
		$(".apps2").css("margin-top", 0.1*($(window).height()-$("#Sign").height()-$(".apps1").height())+"px");
		$(".heading").css("font-size",0.04*$(window).width()+"px");
		$(".text").css("font-size",0.04*$(window).width()+"px");
		$(".MyName").css("font-size",0.07*$(window).width()+"px");
		$("#Signphoto").css("width",$(window).width()/4+"px");
		$("#MessageForm").css("height",2*$(window).height()+"px");
		$("#MessageForm").css("width",$(window).width()+"px");
}

