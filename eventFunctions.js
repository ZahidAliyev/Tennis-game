function clickToContinue(e) {
    // setFormat();
    var	someSound	= new Audio("sounds/somemusic.mp3");
    someSound.play();
  if (showWinScreen) {
    playerScore = 0;
    compScore = 0;
    showWinScreen = false;
  }
}
function handleMouse(e) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  playerY = e.clientY - rect.top - root.scrollTop - playerHeight / 2;
}
