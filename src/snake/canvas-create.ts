import { SnakePart } from "./@types";
import { CANVAS_BACKGROUND_COLOR, CANVAS_BORDER_COLOR, context, FOOD_BACKGROUND_COLOR, FOOD_BORDER_COLOR, gameCanvas, SNAKE_BORDER_COLOR, SNAKE_COLOR } from "./elements";

export function clearCanvas(){
  context.fillStyle = CANVAS_BACKGROUND_COLOR
  context.strokeStyle = CANVAS_BORDER_COLOR
  context.fillRect(0,0, gameCanvas.width, gameCanvas.height)
  context.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}

export function drawSnakePart(snakePart: SnakePart){
  context.fillStyle = SNAKE_COLOR
  context.strokeStyle = SNAKE_BORDER_COLOR
  context.fillRect(snakePart.x, snakePart.y, 10, 10)
  context.strokeRect(snakePart.x, snakePart.y, 10, 10)
}

export function drawFood(foodX: number, foodY: number){
  context.fillStyle = FOOD_BACKGROUND_COLOR
  context.strokeStyle = FOOD_BORDER_COLOR
  context.fillRect(foodX, foodY, 10, 10)
  context.strokeRect(foodX, foodY, 10, 10)
}