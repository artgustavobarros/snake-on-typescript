import { direction } from "./elements";

function changeDirection(event: KeyboardEvent){
  const LEFT_KEY = 37;
  const UP_KEY = 38;
  const RIGHT_KEY = 39;
  const DOWN_KEY = 40;

  if (direction.changingDirection) return;
  direction.changingDirection = true;

  const keyPressed = event.keyCode;
  const goingUp = direction.dy === -10;
  const goingDown = direction.dy === 10;
  const goingRight = direction.dx === 10;
  const goingLeft = direction.dx === -10;

  if (keyPressed === LEFT_KEY && !goingRight){
    direction.dx = -10;
    direction.dy = 0;
  }
  if (keyPressed === UP_KEY && !goingDown){
    direction.dx = 0;
    direction.dy = -10;
  }
  if (keyPressed === RIGHT_KEY && !goingLeft){
    direction.dx = 10;
    direction.dy = 0;
  }
  if (keyPressed === DOWN_KEY && !goingUp){
    direction.dx = 0;
    direction.dy = 10;
  }
}

export function registerControls(){
  document.addEventListener('keydown', changeDirection);
}