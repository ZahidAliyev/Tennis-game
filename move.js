function computerPaddle() {
  if (ballY <= compY + 30) {
    compY -= 10;
  }
  if (ballY >= compY + compHeight - 30) {
    compY += 10;
  }
}

function twoPlayerMove() {
  
    if(leftPlayerUpPressed) {
      playerY -= 30;
  
    };
    if(leftPlayerDownPressed) {
      playerY += 30;
    };
    if(rightPlayerUpPressed) {
      compY -= 30;
    };
    if(rightPlayerDownPressed) {
      compY += 30;
    };
  if(playerY < 0 ) {
    playerY = 0;
  } else if(compY < 0) {
    compY = 0;
  } else if(playerY + playerHeight > canvasHeight) {
    playerY = canvasHeight - playerHeight;
  } else if(compY + compHeight > canvasHeight) {
    compY = canvasHeight - compHeight;
  }


}
function move() {

  
  ballMove()
  if(paddleWithMouse) {
    computerPaddle();
  } else {
    twoPlayerMove();
  }
  draw();

}
