class Game {
  constructor(ctx) {
    this.ctx = ctx;
    
    this.bg = new Background(ctx)
    this.gohan = new Gohan(ctx)
    
    this.lifes = []
    this.kinton = []
    this.obstacle = []

    this.intervalId = null

    this.tick = 0

    this.score = document.querySelector(`.life${this.obstacle.hits}`)
    this.currentLife = document.querySelector(`.life${this.gohan.hits}`)

  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear()
      this._draw()
      this._move()
      this._clearObstacle()
      this._clearKinton()
      this._checkCollisions()
    }, 1000 / 60)

  }


  _clearObstacle() {  // Elimina el obstaculo una vez ha pasado
    this.obstacle = this.obstacle.filter(o => {
      return o.x + o.w >= 0
    })
  }

  _clearKinton() { // Elimina el obstaculo una vez ha pasado
    this.kinton = this.kinton.filter(ki => {
      return ki.x + ki.w >= 0
    })
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  } 

  _draw() {
    this.bg.draw()
    this.gohan.draw()
    this.lifes.forEach(l => l.draw())
    this.kinton.forEach(ki => ki.draw())
    this.obstacle.forEach(o => o.draw())

    this.tick++



  if (this.tick > Math.random() * 100 + 200) {
    this.tick = 0
    this._addLife()
    }

  if (this.tick > Math.random() * 100 + 200) {
    this.tick = 0
    this._addObstacle()
    }

  }

  _addObstacle() {
    this.obstacle.push(
      new Obstacle(this.ctx)
    )
  }

  _addLife() {
    this.kinton.push(
      new Kinton(this.ctx)
    )
  }

  _addIchi() {
    this.lifes.push(
      new Lifes(this.ctx)
    )
  }

  _move() {
    this.bg.move()
    this.gohan.move()
    this.lifes.forEach(l => l.move())
    this.kinton.forEach(ki => ki.move())
    this.obstacle.forEach(o => o.move())
  }

  _checkCollisions() {

    const colH = this.kinton.some(ki => { // Kinton da vida a Gohan
      return ki.collide(this.gohan)
    })


    const colC = this.obstacle.some( o => { // Celljr mata a Gohan
      return o.collide(this.gohan)
    })

    const colK = this.gohan.kameha.some( k => { // Kameha mata a Celljr
      return this.obstacle.some(obs => {
      return k.collide(obs)
       })
    })

  
      if(colK){
        this.score ++
        this.obstacle= []
      }
      
      if (colC){ // Si Celljr mata a Gohan
        this.obstacle= [] // EL array de Celljr se vacía
        this.currentLife = document.querySelector(`.life${this.gohan.hits}`)
        this.currentLife.classList.add("opacity-0")
        this.gohan.hits--
        if(this.gohan.hits === 0){
          this._gameOver()
        }
      } 

      if(colH) { // Si Kinton da vida a Gohan
        this.kinton = [] // El array de Kintos se vacía (desaparece)
        this.gohan.hits++
        console.log(this.currentLife)
        this.currentLife = document.querySelector(`.life${this.gohan.hits}`)
        this.currentLife.classList.remove("opacity-0")
       
      }
  }

  


  _gameOver() {
    clearInterval(this.intervalId)

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "WE NEED GOKU!",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }


  
}


