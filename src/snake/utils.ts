
export function randomTen(min: number, max: number){
  return Math.round((Math.random() * (max-min) + min) / 10) * 10
}
