class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.bg = new Background(ctx);
    this.gohan = new Gohan(ctx);

    this.lifes = [];
    this.kinton = [];
    this.obstacle = [];
    this.cell = [];

    this.intervalId = null;

    this.tick = 0;

    this.score = 0;
    this.currentLife = document.querySelector(`.life${this.gohan.hits}`);
  }

  run() {
    this.intervalId = setInterval(() => {
      this._clear();
      this._draw();
      this._move();
      this._clearObstacle();
      this._clearKinton();
      this._clearCell();
      this._checkCollisions();
    }, 1000 / 60);
  }

  // -----------------------
  //     CLEAR
  // -----------------------

  _clearObstacle() {
    // Elimina el obstaculo una vez ha pasado
    this.obstacle = this.obstacle.filter(o => {
      return o.x + o.w >= 0;
    });
  }

  _clearCell() {
    // Elimina el obstaculo una vez ha pasado
    this.cell = this.cell.filter(ce => {
      return ce.x + ce.w >= 0;
    });
  }

  _clearKinton() {
    // Elimina el obstaculo una vez ha pasado
    this.kinton = this.kinton.filter(ki => {
      return ki.x + ki.w >= 0;
    });
  }

  _clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  // -----------------------
  //     DRAW
  // -----------------------

  _draw() {
    this.bg.draw();
    this.gohan.draw();
    this.lifes.forEach(l => l.draw());
    this.kinton.forEach(ki => ki.draw());
    this.obstacle.forEach(o => o.draw());
    this.cell.forEach(ce => ce.draw());

    this.tick++;

    if (this.tick > Math.random() * 50 + 200) {
      this.tick = 0;
      this._addLife();
    }

    if (this.tick > Math.random() * 10 + 200) {
      this.tick = 0;
      this._addObstacle();
    }

    if (this.tick > Math.random() * 1 + 200) {
      this.tick = 0;
      this._addCell();
    }
  }

  // -----------------------
  //     ADD
  // -----------------------

  _addObstacle() {
    this.obstacle.push(new Obstacle(this.ctx));
  }

  _addLife() {
    this.kinton.push(new Kinton(this.ctx));
  }

  _addIchi() {
    this.lifes.push(new Lifes(this.ctx));
  }

  _addCell() {
    this.cell.push(new Cell(this.ctx));
  }

  // -----------------------
  //     MOVE
  // -----------------------

  _move() {
    this.bg.move();
    this.gohan.move();
    this.lifes.forEach(l => l.move());
    this.kinton.forEach(ki => ki.move());
    this.obstacle.forEach(o => o.move());
    this.cell.forEach(ce => ce.move());
  }

  // -----------------------
  //     SCORE
  // -----------------------

  _updateScore() {
    this.score++;
    document.querySelector(".score span").innerText = this.score;
  }

  // -----------------------
  //     CHECK COLISIONS
  // -----------------------

  _checkCollisions() {
    
    const colH = this.kinton.some(ki => {
      // Kinton da vida a Gohan
      return ki.collide(this.gohan);
    });

    const colC = this.obstacle.some(o => {
      // Celljr mata a Gohan
      return o.collide(this.gohan);
    });

    const colD = this.cell.some(ce => {
      // Cell mata a Gohan
      return ce.collide(this.gohan);
    });

    const colK = this.gohan.kameha.some(k => {
      // Kameha mata a Celljr
      return this.obstacle.some(obs => {
        return k.collide(obs);
      });
    });

    const colKc = this.gohan.kameha.some(k => {
      // Kameha mata a Cell
      return this.cell.some(cel => {
        return k.collide(cel);
      });
    });

    // -----------------------
    //    WHAT HAPPENS WHEN CHECK COLISIONS
    // -----------------------
    
    if (colH) {
      // Si Kinton da vida a Gohan
      this.kinton = []; // El array de Kinton se vacía (desaparece)
      this.gohan.hits++;
      console.log(this.currentLife);
      this.currentLife = document.querySelector(`.life${this.gohan.hits}`);
      this.currentLife.classList.remove("opacity-0");
    }

    if (colC) {
      // Si Celljr mata a Gohan
      this.obstacle = []; // EL array de Celljr se vacía
      this.currentLife = document.querySelector(`.life${this.gohan.hits}`);
      this.currentLife.classList.add("opacity-0");
      this.gohan.hits--;
      if (this.gohan.hits === 0) {
        this._gameOver();
      }
    }

    if (colD) {
      // Si Cell mata a Gohan
      this.cell = []; // EL array de Cell se vacía
      this.currentLife = document.querySelector(`.life${this.gohan.hits}`);
      this.currentLife.classList.add("opacity-0");
      this.gohan.hits--;
      if (this.gohan.hits === 0) {
        this._gameOver();
      }
    }

    if (colK) {
      // Si Kameha mata a celljr entonces...
      this._updateScore();
      this.obstacle = [];
    }

    if (colKc) {
      // Si Kameha mata a cell entonces...
      this._updateScore();
      console.log('tocado')
      this.cell = [];
    }

  }

  // -----------------------
  //     GAME OVER
  // -----------------------

  _gameOver() {
    clearInterval(this.intervalId);

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "WE NEED GOKU!",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
  }
}
