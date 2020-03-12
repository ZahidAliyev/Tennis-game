//CLICK TO CONTINUE

function clickToContinue(e) {
  if (showWinScreen) {
    if (
      e.offsetX >= 340 &&
      e.offsetX <= 500 &&
      e.offsetY >= 230 &&
      e.offsetY <= 275
    ) {
      playerScore = 0;
      compScore = 0;
      showWinScreen = false;
      ballXspeed = 5;
      ballYspeed = 5;
    };
  };
}
//BACK TO MENU AFTER GAME LEVEL FINISHED
function backToMenu(e) {}
//PLAYER PADDLE MOVE
function handleMouse(e) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  playerY = e.clientY - rect.top - root.scrollTop - playerHeight / 2;
}
// START 1 PLAYER GAME
function startOnePlayer(e) {
  console.log(e.offsetX,e.offsetY);
  if (
    e.offsetX >= 350 &&
    e.offsetX <= 430 &&
    e.offsetY >= 280 &&
    e.offsetY <= 310
  ) {
    console.log("startOnePlayer -> startGame", startGame);
    if (startGame) {
      function loop() {
        move();
        someSound.play();
        requestAnimationFrame(loop);
      }
      requestAnimationFrame(loop);
      canvas.addEventListener("mousedown", clickToContinue);
      canvas.addEventListener("mousemove", handleMouse);
      console.log("start");
    }
    startGame = false;
    console.log("startOnePlayer -> startGame", startGame);
  }
}
