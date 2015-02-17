//Global vars
var DEBUG = true;

//Start JS
$(window).load(function(){
	if(DEBUG == true)
		console.log("______________________\n   INITIALIZE JS...\n______________________");
	init();
});

function init(){
	if(DEBUG == true)
		console.log("Current year is: "+getCurrentYear());

	$(".year").append(getCurrentYear());

	if(DEBUG == true)
		console.log("...Initializing completed...\n______________________");
}

function getCurrentYear(){
	var currentTime = new Date();
	return currentTime.getFullYear();
}