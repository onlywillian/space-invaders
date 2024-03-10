import { HEIGHT, WIDTH } from "./main.js";
import Bullet from "./Bullet.js";
const playerSprite = new Image(50, 50);
playerSprite.src = "./assets/player.png";

export default class Player {
  constructor(x = 0, y = 0, width = 10, height = 10) {
    this.x = WIDTH / 2 - width;
    this.y = HEIGHT - height * 2;
    this.width = width;
    this.height = height;
    this.speed = 20;
    this.bullets = [];
  }

  shoot() {
    let bullet = new Bullet(this.x, this.y);
    this.bullets.push(bullet);
  }

  updatePosition(key) {
    if (key === "d" || key === "ArrowRight") {
      this.x += this.speed; // Move right
    } else if (key === "a" || key === "ArrowLeft") {
      this.x -= this.speed; // Move left
    } else if (key === "w" || key === "ArrowUp") {
      this.y -= this.speed; // Move up
    } else if (key === "s" || key === "ArrowDown") {
      this.y += this.speed; // Move down
    }

    if (key === " ") {
      this.shoot();
    }

    // Keep the player within the screen borders
    this.x = Math.max(0, Math.min(this.x, WIDTH - this.width));
    this.y = Math.max(0, Math.min(this.y, HEIGHT - this.height));
  }

  render(ctx, enemies) {
    ctx.drawImage(playerSprite, this.x, this.y, this.width, this.height);

    for (let i = this.bullets.length - 1; i >= 0; i--) {
      let bullet = this.bullets[i];
      bullet.updatePosition();
      bullet.render(ctx);

      // Remove the bullet if it's out of bounds
      if (bullet.outOfBound) {
        this.bullets.splice(i, 1);
      }

      for (let j = enemies.length - 1; j >= 0; j--) {
        let enemy = enemies[j];
        if (bullet.collidesWith(enemy)) {
          console.log("x");
          // Remove the bullet and the enemy
          this.bullets.splice(i, 1);
          enemies.splice(j, 1);
          break;
        }
      }
    }
  }
}
