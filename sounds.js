var pushSound = new Audio("sounds/Hit_Hurt.wav");
var goalSound = new Audio("sounds/goal.wav");
var someSound = new Audio("sounds/mainMusic.mp3");

pushSound.volume = 0.1;
goalSound.volume = 0.1;

var	audioFormat;
function setFormat()	{
		var	audio	= new Audio();
		if	(audio.canPlayType("audio/mp3"))	{
						audioFormat	= ".mp3";
		}	else	{
						audioFormat	= ".ogg";
		}
}
function isMusicTurned() {
	if(music) {
        someSound.play();
        musicTextOnOff = "Off";
      } else {
        someSound.pause();
        musicTextOnOff = "On";
      }
}
