import { WIDTH } from "./main.js";
const enemySprite = new Image(50, 50);
enemySprite.src = "./assets/enemy.png";

export default class Enemy {
  constructor(x = 0, y = 0, width = 10, height = 10) {
    this.x = WIDTH / 2 - width;
    this.y = height;
    this.width = width;
    this.height = height;
    this.speed = 20;
  }

  render(ctx) {
    ctx.drawImage(enemySprite, this.x, this.y, this.width, this.height);
  }
}
