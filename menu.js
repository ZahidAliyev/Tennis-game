function menuGraphics() {
  ctx.drawImage(table, 0, 0);
  ctx.fillStyle = "white";
  ctx.fillText("1 Player", canvasWidth / 2 - 50, canvasHeight / 2, 100);
  ctx.fillText("2 Players", canvasWidth / 2 - 50, canvasHeight / 2 + 50, 100);
  ctx.fillText(
    "Music " + musicTextOnOff,
    canvasWidth / 2 - 50,
    canvasHeight / 2 + 100,
    100
  );
}

function gameStartOrEnd() {
    if (startGame === true) {

        menuGraphics(); 
        isMusicTurned();
      } else {
        
        move();
      }
}

