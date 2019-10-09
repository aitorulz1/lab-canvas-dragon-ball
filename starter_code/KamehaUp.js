class KamehaUp {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.y = y;
    this.h = 16;
    this.w = 16;
    this.x = x;
    this.vx = 10;

    this.hits = 1;

    this.img = new Image();
    this.img.src = "images/energy-ball.png";
  }

  draw() {
    if (this.hits > 0) {
    this.ctx.drawImage(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}

  move() {
    this.y -= this.vy;
  }

  collide(obstacle) {
    if (
      this.x < obstacle.x + obstacle.w &&
      this.x + this.w > obstacle.x &&
      this.y < obstacle.y + obstacle.h &&
      this.h + this.y > obstacle.y
    ) {
      obstacle.hits--;
      return true;
    }
  }

  collide(cell) {
    if (
      this.x < cell.x + cell.w &&
      this.x + this.w > cell.x &&
      this.y < cell.y + cell.h &&
      this.h + this.y > cell.y
    ) {
      cell.hits--;
      return true;
    }
  }

  collide(boo) {
    if (
      this.x < boo.x + boo.w &&
      this.x + this.w > boo.x &&
      this.y < boo.y + boo.h &&
      this.h + this.y > boo.y
    ) {
      boo.hits--;
      return true;
    }
  }

  isVisible() {
    return true;
  }
}
