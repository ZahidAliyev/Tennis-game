function clickToContinue(e) {
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
