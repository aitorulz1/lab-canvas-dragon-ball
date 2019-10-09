class Boo {
    constructor(ctx) {
      this.ctx = ctx;
  
      this.y = Math.random() * 300 + 20;
      this.w = 266 / 4;
  
      this.hits = 1;
  
      this.h = 50;
      this.x = this.ctx.canvas.width;
      this.vx = -7.5;
  
      this.img = new Image();
      this.img.src = "images/boo-prueba.png";
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
  