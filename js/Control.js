class Control {
  constructor({ canvas, ctx }) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.balls = [
      new Ball({
        ctx: this.ctx,
        x: this.canvas.width / 2,
        y: this.canvas.height / 2 + 100,
        radius: 100,
        color: "#fff",
        speed: 0.02,
        distance: { x: 0, y: 0 },
      }),
      new Ball({
        ctx: this.ctx,
        x: this.canvas.width / 2 + 100,
        y: this.canvas.height / 2 + 150,
        radius: 20,
        color: "#ffc947",
        speed: 0.01,
        distance: { x: 100, y: 100 },
      }),
      new Ball({
        ctx: this.ctx,
        x: this.canvas.width / 2 - 100,
        y: this.canvas.height / 2,
        radius: 30,
        color: "#185adb",
        speed: 0.01,
        distance: { x: -100, y: -100 },
      }),
    ];

    this.mousePointer = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };
  }

  init() {
    this.listener();
    this.update();
    this.animate();
  }

  animate() {
    this.balls.forEach((ball) => {
      //TODO: calculate the ball distance with the mouse position
      const distX = this.mousePointer.x + ball.distance.x - ball.x;
      const distY = this.mousePointer.y + ball.distance.y - ball.y;

      // TODO: add the ball position with the scaled down distance
      ball.x += distX * ball.speed;
      ball.y += distY * ball.speed;
    });

    requestAnimationFrame(this.animate.bind(this));
  }

  listener() {
    this.canvas.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      this.mousePointer = { x: pageX, y: pageY };
    });
  }

  render() {
    this.balls.forEach((ball) => ball.draw());
  }

  update() {
    this.ctx.fillStyle = "rgba(0,0,0,0.1)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (!this.isMoving()) {
      this.ctx.save();
      this.ctx.translate(Utility.random(0, 5), Utility.random(0, 5));
    }

    this.render();

    if (!this.isMoving()) {
      this.ctx.restore();
    }

    requestAnimationFrame(this.update.bind(this));
  }
  isMoving() {
    let isMoving = true;

    this.balls.forEach((ball) => {
      const distX = Math.round(this.mousePointer.x - ball.x);
      const distY = Math.round(this.mousePointer.y - ball.y);

      if (distX == 0 && distY == 0) isMoving = false;
    });

    return isMoving;
  }
}
