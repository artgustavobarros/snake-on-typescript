import { randomTen } from "./utils"

export const CANVAS_BACKGROUND_COLOR = 'white'
export const CANVAS_BORDER_COLOR = 'black'
export const SNAKE_COLOR = 'lightgreen' 
export const SNAKE_BORDER_COLOR = 'darkgreen'
export const FOOD_BACKGROUND_COLOR = 'red'
export const FOOD_BORDER_COLOR = 'darkred'
export const gameCanvas = document.getElementById('gameCanvas') as HTMLCanvasElement
export const context = gameCanvas.getContext('2d') as CanvasRenderingContext2D

export const direction = {
  dx: 10,
  dy: 0,
  changingDirection: false
}

export const food = {
  x: randomTen(0, gameCanvas.width - 10),
  y: randomTen(0, gameCanvas.height - 10),
}