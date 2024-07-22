import { main } from "./actions";
import { clearCanvas } from "./canvas-create";
import { createFood, drawSnake } from "./draw";
import { registerControls } from "./movement";

export function start(){
  registerControls()
  clearCanvas();
  createFood()
  drawSnake();
  main();
}