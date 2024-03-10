export default class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.outOfBound = false;
    // this.direction = direction;
  }

  updatePosition() {
    this.y -= this.speed;

    if (this.y < 0) {
      this.outOfBound = true;
    }
  }

  collidesWith(enemy) {
    return (
      this.x < enemy.x + enemy.width &&
      this.x + this.width > enemy.x &&
      this.y < enemy.y + enemy.height &&
      this.y + this.height > enemy.y
    );
  }

  render(ctx) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2); // Draw a circle for the bullet
    ctx.fill();
  }
}
