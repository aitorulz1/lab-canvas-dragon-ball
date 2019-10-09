class Boo {
  constructor(ctx) {
    this.ctx = ctx;

    this.y = 0;
    this.w = 55;

    this.hits = 1;

    this.h = 225 / 4;
    this.x = Math.random() * 600 + 50;
    this.vy = 5;

    this.img = new Image();
    this.img.src = "images/boo.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.tick = 0;
  }

  draw() {
    if (this.hits > 0) {
      this.ctx.drawImage(
        this.img,
        0,
        (this.img.frameIndex * this.img.height) / 4,
        this.img.width,
        this.img.height / 4,
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
    this.y += this.vy;

  }

  isVisible() {
    this.y + this.h > this.ctx.canvas.height;
  }

  _animate() {
    if (this.tick === 15) {
      this.tick = 0;
      if (++this.img.frameIndex === this.img.frames) {
        this.img.frameIndex = 0;
      }
    }
  }

  collide(gohan) {
    if (
      this.x < gohan.x + gohan.w &&
      this.x + this.w > gohan.x &&
      this.y < gohan.y + gohan.h &&
      this.h + this.y > gohan.y
    ) {
      console.log("collide");
      return true;
    }
  }
}
