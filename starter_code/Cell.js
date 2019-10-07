class Cell {
    constructor(ctx) {
      this.ctx = ctx
  
      this.y = (Math.random() * 500 + 20)
      this.w = 319/8
      
      this.hits = 1
      
      this.h = 45
      this.x = this.ctx.canvas.width
      this.vx = -10  
  
      this.img = new Image()
      this.img.src = "images/daddy-cell.png"
      this.img.frames = 8
      this.img.frameIndex = 0
  
      this.tick = 0
  
      }
  
    
      draw() {
  
        if(this.hits > 0){
          this.ctx.drawImage(
            this.img,
            this.img.frameIndex * this.img.width / 8,
            0,
            this.img.width / 8,
            this.img.height,
            this.x,
            this.y,
            this.w,
            this.h,
            
          );
  
          this._animate      
  
          this.tick++
        
        }
      }
    
      move() {
        this._animate()
        this.x += this.vx
      }
  
      isVisible() {
        this.x + this.w > 0
      }
  
      _animate() {
        if(this.tick === 15){
          this.tick = 0
          if(++this.img.frameIndex === this.img.frames){
            this.img.frameIndex = 0
          }    
        }  
      }
  
      collide(gohan) {
        if (this.x < gohan.x + gohan.w &&
          this.x + this.w > gohan.x &&
          this.y < gohan.y + gohan.h &&
          this.h + this.y > gohan.y){
            console.log('collide')
            return true
          }
      }
  
    }