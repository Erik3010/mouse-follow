class Ball {
  constructor({ ctx, x, y, radius, color, speed, distance }) {
    this.ctx = ctx;

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.speed = speed;

    this.distance = distance;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.fill();
    this.ctx.closePath();
  }
}
