const c = document.getElementById("gameCanvas");
const ctx = c.getContext("2d");

let snake = [
  { x: 150, y: 150 },
  { x: 140, y: 150 },
  { x: 130, y: 150 },
  { x: 120, y: 150 },
  { x: 110, y: 150 },
];

const drawSnakePart = (snakePart) => {
  ctx.fillStyle = "lightgreen";
  ctx.strokestyle = "darkgreen";
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
};

const drawSnake = () => {
  snake.forEach(drawSnakePart);
};

const clearCanvas = () => {
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
};

const advanceSnake = (dx, dy) => {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  snake.pop();
};

const rightadvanceSnake = () => {
  advanceSnake(10, 0);
};

const leftadvanceSnake = () => {
  advanceSnake(-10, 0);
};

const upadvanceSnake = () => {
  advanceSnake(0, -10);
};

const downadvanceSnake = () => {
  advanceSnake(0, 10);
};

const gameLoop = () => {
  clearCanvas();
  rightadvanceSnake();
  drawSnake();
};

setInterval(gameLoop, 100);

