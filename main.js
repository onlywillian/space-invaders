import Enemy from "./Enemy.js";
import Player from "./Player.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

export const WIDTH = 800;
export const HEIGHT = 600;

const backgroundSprite = new Image(WIDTH, HEIGHT);
backgroundSprite.src = "./assets/background.jpg";

canvas.style.border = "1px solid black";

// Instancing
const player = new Player(0, 0, 50, 50);
const enemies = [new Enemy(0, 0, 50, 50)];

function init() {
  document.addEventListener("keypress", (e) => {
    player.updatePosition(e.key);
  });
}

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  ctx.drawImage(backgroundSprite, 0, 0, WIDTH, HEIGHT);
  player.render(ctx, enemies);

  enemies.forEach((enemy) => enemy.render(ctx));
}

function render() {
  draw();

  window.requestAnimationFrame(render);
}
init();
render();
