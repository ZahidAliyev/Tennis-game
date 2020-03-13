//CLICK TO CONTINUE

function clickToContinue(e) {
  if (showWinScreen) {
    if (
      e.offsetX >= 340 &&
      e.offsetX <= 500 &&
      e.offsetY >= 230 &&
      e.offsetY <= 260
    ) {
      playerScore = 0;
      compScore = 0;
      showWinScreen = false;
      ballXspeed = 5;
      ballYspeed = 5;
    }
  }
}

//BACK TO MENU AFTER GAME LEVEL FINISHED
function backToMenu(e) {
  if (showWinScreen) {
    if (
      e.offsetX >= 340 &&
      e.offsetX <= 430 &&
      e.offsetY >= 275 &&
      e.offsetY <= 305
    ) {
      playerScore = 0;
      compScore = 0;
      ballXspeed = 5;
      ballYspeed = 5;
      startGame = true;
      showWinScreen = false;
    }
  }
}

// MUSIC 
function musicOnOff(e) {
  if (
    e.offsetX >= 340 &&
    e.offsetX <= 442 &&
    e.offsetY >= 376 &&
    e.offsetY <= 410
  ) {
    if (startGame) {
      console.log("music");
      if(music) {
        music = false;
      } else {
        music = true;
      }
      
    };
  };
}

//PLAYER PADDLE MOVE
function handleMouse(e) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;

  playerY = e.clientY - rect.top - root.scrollTop - playerHeight / 2;
}

// START 1 PLAYER GAME
function startOnePlayer(e) {
  console.log(e.offsetX, e.offsetY);
  if (
    e.offsetX >= 350 &&
    e.offsetX <= 430 &&
    e.offsetY >= 280 &&
    e.offsetY <= 310
  ) {
    if (startGame) {
      startGame = false;
    };
  };
}
