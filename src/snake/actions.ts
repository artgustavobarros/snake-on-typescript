import { clearCanvas, drawFood  } from "./canvas-create"
import { direction, food, gameCanvas } from "./elements"
import { createFood, drawSnake } from "./draw"

    let score = 0

    export let snake = [  
      {x: 150, y: 150},  {x: 140, y: 150},  {x: 130, y: 150},  {x: 120, y: 150},  {x: 110, y: 150}
    ]

    function advanceSnake(){
      const head = {x: snake[0].x + direction.dx, y: snake[0].y + direction.dy}
      snake.unshift(head)//add a new part at the top of snake
      const didEatFood = snake[0].x === food.x && snake[0].y === food.y
      if(didEatFood){
        score += 10;
        (document.getElementById('score') as HTMLElement).innerHTML = String(score)
        createFood()
      }else{
        snake.pop()//pop the last part of snake
      }
    }


    function didGameEnd(){
      for(let i = 4; i < snake.length; i++){
        const didCollide = snake[i].x === snake[0].x &&  snake[i].y === snake[0].y
        if (didCollide) {
          return true
        }
      }

      const hitLeftWall = snake[0].x < 0
      const hitRightWall = snake[0].x > gameCanvas.width - 10
      const hitTopWall = snake[0].y < 0
      const hitDownWall = snake[0].y > gameCanvas.height - 10

      return hitLeftWall || hitRightWall || hitTopWall || hitDownWall
    }
    
    export function main(){
      if (didGameEnd()){
        return 
      }

      setTimeout(function onTick(){
        direction.changingDirection = false
        clearCanvas()
        drawFood(food.x, food.y)
        advanceSnake()
        drawSnake()
        main()
      },100)
    }
