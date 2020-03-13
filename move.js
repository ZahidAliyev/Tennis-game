function computerPaddle() {
  if (ballY <= compY + 30) {
    compY -= 10;
  }
  if (ballY >= compY + compHeight - 30) {
    compY += 10;
  }
}

function move() {

  
  ballMove()
  computerPaddle();
  draw();

}
