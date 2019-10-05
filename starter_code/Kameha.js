class Kameha {
    constructor(ctx, x, y) {
      this.ctx = ctx
      this.y = y
      this.h = 16
      this.w = 16
      this.x = x
      this.vx = 10

      this.img = new Image()
      this.img.src = "images/energy-ball.png"
    }
  
    draw() {
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

  
    move() {
      this.x += this.vx
    }

    collide(obstacle) {
      if (this.x < obstacle.x + obstacle.w &&
      this.x + this.w > obstacle.x &&
      this.y < obstacle.y + obstacle.h &&
      this.h + this.y > obstacle.y){
        obstacle.hits --
        return true
      }

    }

    isVisible() {
      return true
    }
  }