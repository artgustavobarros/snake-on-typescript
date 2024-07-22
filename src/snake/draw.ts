import { snake } from "./actions";
import { drawSnakePart } from "./canvas-create";
import { food, gameCanvas } from "./elements";
import { randomTen } from "./utils";

export function drawSnake(){
  return (
    snake.forEach(drawSnakePart)
  )
}


export function createFood(){
  food.x = randomTen(0, gameCanvas.width - 10)
  food.y = randomTen(0, gameCanvas.height - 10)

  snake.forEach(function isFoodOnSnake(part) {
    const foodIsoNsnake = part.x == food.x && part.y == food.y;
    if (foodIsoNsnake) createFood();
  });
}
