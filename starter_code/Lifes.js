class Lifes {
  constructor(ctx) {
    this.ctx = ctx;

    this.y = 20;
    this.w = 61 / 4;

    this.hits = 1;

    this.h = 17;
    this.x = 20;
    this.vx = 0;

    this.img = new Image();
    this.img.src = "images/balls.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.tick = 0;
  }

  draw() {
    if (this.hits > 0) {
      this.ctx.drawImage(
        this.img,
        (this.img.frameIndex * this.img.width) / 4,
        0,
        this.img.width / 4,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
      );

      this._animate;

      this.tick++;
    }
  }

  move() {
    this._animate();
    this.x += this.vx;
  }

  isVisible() {
    this.x + this.w > 0;
  }

  _animate() {
    if (this.tick === 15) {
      this.tick = 0;
      if (++this.img.frameIndex === this.img.frames) {
        this.img.frameIndex = 0;
      }
    }
  }
}
