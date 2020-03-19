

//CLICK TO CONTINUE

function clickToContinue(e) {
  if (showWinScreen) {
    if (
      e.offsetX >= 340 &&
      e.offsetX <= 500 &&
      e.offsetY >= 230 &&
      e.offsetY <= 260
    ) {
      playerY = 250;
      compY = 250;
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
      if (music) {
        music = false;
      } else {
        music = true;
      }
    }
  }
}

//PLAYER PADDLE MOVE
function playerPaddleControl(e) {
  var rect = canvas.getBoundingClientRect();
  var root = document.documentElement;
  if (paddleWithMouse) {
    playerY = e.clientY - rect.top - root.scrollTop - playerHeight / 2;
  }
}

// START 1 PLAYER GAME
function startOnePlayer(e) {
  if (
    e.offsetX >= 350 &&
    e.offsetX <= 430 &&
    e.offsetY >= 280 &&
    e.offsetY <= 310
  ) {
    if (startGame) {
      paddleWithMouse = true;
      console.log("startOnePlayer -> paddleWithMouse", paddleWithMouse)
      paddleWithKeyboard = false;
      console.log("startOnePlayer -> paddleWithKeyboard", paddleWithKeyboard)
      startGame = false;
    }
  }
}
// Two player game
function startTwoPlayer(e) {
  if (
    e.offsetX >= 340 &&
    e.offsetX <= 460 &&
    e.offsetY >= 320 &&
    e.offsetY <= 360 && 
    startGame == true
  ) {
    startGame = false;
    paddleWithMouse = false;
    console.log("twoPlayer -> paddleWithMouse", paddleWithMouse);
    paddleWithKeyboard = true;
    console.log("twoPlayer -> paddleWithKeyboard", paddleWithKeyboard);
  }
}
// Controling Two player game with Keyboard
function twoPlayerControlKeyDown(e) {
  if (paddleWithKeyboard) {
    console.log(e.code);
    if(e.code === "KeyW") {
      leftPlayerUpPressed = true;

    };
    if(e.code === "KeyS") {
      leftPlayerDownPressed = true;
    };
    if(e.code === "ArrowUp") {
      rightPlayerUpPressed = true;
    };
    if(e.code === "ArrowDown") {
      rightPlayerDownPressed = true;
    };
  }
}
function twoPlayerControlKeyUp(e) {
  if (paddleWithKeyboard) {
    console.log(e.code);
    if(e.code === "KeyW") {
      leftPlayerUpPressed = false;

    };
    if(e.code == "KeyS") {
      leftPlayerDownPressed = false;
    };
    if(e.code === "ArrowUp") {
      rightPlayerUpPressed = false;
    };
    if(e.code === "ArrowDown") {
      rightPlayerDownPressed = false;
    };
  }
}

