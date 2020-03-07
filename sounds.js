var pushSound = new Audio("sounds/Hit_Hurt.wav");
var goalSound = new Audio("sounds/goal.wav");

var	audioFormat;
function setFormat()	{
		var	audio	= new Audio();
		if	(audio.canPlayType("audio/mp3"))	{
						audioFormat	= ".mp3";
		}	else	{
						audioFormat	= ".ogg";
		}
}
