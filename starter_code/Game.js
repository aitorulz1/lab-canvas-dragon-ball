const G_KEY = 71;

class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.bg = new Background(ctx);
    this.gohan = new Gohan(ctx);

    this.lifes = [];
    this.kinton = [];
    this.obstacle = [];
    this.cell = [];
    this.boo = [];

    this.intervalId = null;

    this.tick = 0;

    this.paused = false;

    // this.togglePause();
    this._setListeners();

    this.score = 0;
    this.currentLife = document.querySelector(`.life${this.gohan.hits}`);

    // this.GameAudio = new Audio('http://www.tonosfrikis.com/melodias/movil/bola_de_dragon_z_luz_fuego_destruccion_694.html')
    this.kill = new Audio(
      "http://www.sonidosmp3gratis.com/sounds/dragon-ball-z-scream.mp3"
    );
    this.life = new Audio(
      "http://www.sonidosmp3gratis.com/sounds/dragon-ball-gt-super-saiyan.mp3"
    );
    this.gameOverAudio = new Audio(
      "http://www.sonidosmp3gratis.com/sounds/mario-bros-mamma-mia"
    );
  }

  run() {
    // this.GameAudio.play()

    this.intervalId = setInterval(() => {
      if (!this.paused) {
        this._clear();
        this._draw();
        this._move();
        this._clearObstacle();
        this._clearKinton();
        this._clearCell();
        this._clearBoo();

        this._checkCollisions();
      }
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

  _clearBoo() {
    // Elimina Boo una vez ha pasado
    this.boo = this.boo.filter(b => {
      return b.y + b.h >= 0;
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
    this.boo.forEach(b => b.draw());

    this.tick++;

    if (this.tick > Math.random() * 20 + 20) {
      this.tick = 0;
      this._addLife();
    }

    if (this.tick > Math.random() * 10 + 20) {
      this.tick = 0;
      this._addObstacle();
    }

    if (this.tick > Math.random() * 10 + 20) {
      this.tick = 0;
      this._addCell();
    }

    if (this.tick > Math.random() * 7.5 + 20) {
      this.tick = 0;
      this._addBoo();
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

  _addBoo() {
    this.boo.push(new Boo(this.ctx));
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
    this.boo.forEach(b => b.move());
  }

  // -----------------------
  //     SCORE
  // -----------------------

  _updateScore() {
    this.score++;
    document.querySelector(".score span").innerText = this.score;
    if(this.score === 100){
      this._gameFinish();
    }
  }

  // -----------------------
  //    START / PAUSE
  // -----------------------

  togglePause() {
    if (!this.paused) {
      this.paused = true;
    pausebutton.innerText = "PLAY";
    pausebutton.setAttribute("class", "pausebutton");
    } else if (this.paused) {
      this.paused = false;
      pausebutton.innerText = "PAUSE";
      pausebutton.setAttribute("class", "playbutton");
    }
  }

  // togglePause() {
  //   if (!this.paused) {
  //     this.paused = true;
  //     pausebutton.innerText = "PLAY";
  //     pausebutton.setAttribute("id", "playbutton");
  //   } else if (this.paused) {
  //     this.paused = false;
  //     pausebutton.innerText = "PAUSE";
  //     pausebutton.setAttribute("id", "pausebutton");
  //   }
  // }


  _setListeners() {
    document.getElementById("start-button").onclick = () => {
      this.run();
      document.getElementById("initial-screen").remove();
    };

    document.getElementById("pausebutton").onclick = () => {
      this.togglePause();
    };
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

    const colB = this.boo.some(b => {
      // Boo mata a Gohan
      return b.collide(this.gohan);
    });

    // -----------------------
    //    CHECK COLISIONS KAMEHA
    // -----------------------

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

    const colKb = this.gohan.kameha.some(k => {
      // Kameha mata a Boo
      return this.boo.some(boo => {
        return k.collide(boo);
      });
    });

    // -----------------------
    //    CHECK COLISIONS KAMEHA UP
    // -----------------------

    const colKu = this.gohan.kamehaUp.some(ku => {
      // KamehaUp mata a Celljr
      return this.obstacle.some(obs => {
        return ku.collide(obs);
      });
    });

    const colKcu = this.gohan.kamehaUp.some(ku => {
      // KamehaUp mata a Cell
      return this.cell.some(cel => {
        return ku.collide(cel);
      });
    });

    const colKbu = this.gohan.kamehaUp.some(ku => {
      // KamehaUp mata a Boo
      return this.boo.some(boo => {
        return ku.collide(boo);
      });
    });

    // -----------------------
    //    WHAT HAPPENS WHEN CHECK COLISIONS
    // -----------------------

    if (colH) {
      // Si Kinton da vida a Gohan
      this.life.play();
      this.kinton = []; // El array de Kinton se vacía (desaparece)
      this.gohan.hits++;
      this.currentLife = document.querySelector(`.life${this.gohan.hits}`);
      this.currentLife.classList.remove("opacity-0");
    }

    if (colC) {
      // Si Celljr mata a Gohan
      this.kill.play();
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
      this.kill.play();
      this.cell = []; // EL array de Cell se vacía
      this.currentLife = document.querySelector(`.life${this.gohan.hits}`);
      this.currentLife.classList.add("opacity-0");
      this.gohan.hits--;
      if (this.gohan.hits === 0) {
        this._gameOver();
      }
    }

    if (colB) {
      // Si Boo mata a Gohan
      this.kill.play();
      this.cell = []; // EL array de Cell se vacía
      this.currentLife = document.querySelector(`.life${this.gohan.hits}`);
      this.currentLife.classList.add("opacity-0");
      this.gohan.hits--;
      if (this.gohan.hits === 0) {
        this._gameOver();
      }
    }

    /// KAMEHA

    if (colK) {
      // Si Kameha mata a celljr entonces...
      this._updateScore();
      this.obstacle = this.obstacle.filter(o => o.hits === 1);
    }

    if (colKc) {
      // Si Kameha mata a cell entonces...
      this._updateScore();
      this.cell = this.cell.filter(ce => ce.hits === 1);
    }

    if (colKb) {
      // Si Kameha mata a cell entonces...
      this._updateScore();
      this.boo = this.boo.filter(b => b.hits === 1);
    }

    /// KAMEHA UP

    if (colKu) {
      // Si Kameha UP mata a celljr entonces...
      this._updateScore();
      this.obstacle = this.obstacle.filter(o => o.hits === 1);
    }

    if (colKcu) {
      // Si Kameha UP mata a cell entonces...
      this._updateScore();
      this.cell = this.cell.filter(ce => ce.hits === 1);
    }

    if (colKbu) {
      // Si Kameha UP mata a cell entonces...
      this._updateScore();
      this.boo = this.boo.filter(b => b.hits === 1);
    }
  }


  // -----------------------
  //     GAME FINISHED - YOU WIN
  // -----------------------

  _gameFinish() {
    clearInterval(this.intervalId);

    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "YOU SAVED THE WORLD!",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
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
