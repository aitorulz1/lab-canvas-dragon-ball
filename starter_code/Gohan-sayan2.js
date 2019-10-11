const UP_KEY = 40;
const DOWN_KEY = 38;
const S_KEY = 83;
const RIGHT_KEY = 39;
const LEFT_KEY = 37;
const D_KEY = 68;

class Gohan2 {
  constructor(ctx) {
    this.ctx = ctx;

    this.x = 0.05 * this.ctx.canvas.width; // Distancia en la que aparece Gohan
    this.xMax = 600;

    this.hits = 3;

    this.y0 = 450;
    this.y = this.y0;
    this.yMax = 500;

    this.w = 50.25;

    this.h0 = 43;
    this.h = this.h0;

    this.vx = 0;
    this.vy = 0;

    this.ax = 0;
    this.ay = 0;

    this.g = 0.09;

    this.kameSound = new Audio('http://www.sonidosmp3gratis.com/sounds/ball-dragon-gt-jump.mp3');

    this.img = new Image();
    this.img.src = "images/gohan-long-2.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.tick = 0;

    this.actions = {
      up: false,
      down: false,
      


    }

    this._setListeners();

    this.kameha = [];
    this.kamehaUp = [];
  }

  draw() {
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

    this._animate();

    this.tick++;

    this.kameha.forEach(k => k.draw());
    this.kamehaUp.forEach(ku => ku.draw());
  }

  move() {

    this.y += this.vy;
    this.x += this.vx;

    this.vx += this.ax;
    this.vy += this.ay;
    this.vy += this.g;

    if (this.y > 500) {
      // Marca la distancia hasta la que puede llegar en +y y en -y
      this.y = this.yMax;
    } else if (this.y <= 10) {
      this.y = 10;
    }

    if (this.x > 600) {
      // Marca la distancia hasta la que puede llegar en +x y en -x
      this.x = this.xMax;
    } else if (this.x <= 10) {
      this.x = 10;
    }

    this.kameha.forEach(k => k.move());
    this.kamehaUp.forEach(ku => ku.move());
  }

  _animate() {
    this.tick++;

    if (this.tick > 4) {
      this.tick = 0;
    }

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }

  _shoot() {
    this.kameSound.play();
    this.kameha.push(new Kameha(this.ctx, this.x + this.w, this.y + this.h));
  }

  _shootUP() {
    this.kameSound.play();
    this.kamehaUp.push(new KamehaUp(this.ctx, this.x + this.w, this.y + this.h));

  }

  _applyActions(){
    if(this.actions.d) {
      this.img.src = "images/gohan-kamehUp-2.png";
    }
  }

  _switchAction(key, apply){
    switch (key){
      case D_KEY:
        this.actions.d = apply
        break
    }
  }

  _setListeners() {
    document.onkeydown = e => {
      if (e.keyCode === UP_KEY) {
        this.vy = 7.5;
      } else if (e.keyCode === DOWN_KEY) {
        this.vy = -5;
      } else if (e.keyCode === RIGHT_KEY) {
        this.img.src = "images/gohan-fast-2.png";
        this.vx = 7.5;
      } else if (e.keyCode === LEFT_KEY) {
        this.vx = -7.5;
      } else if (e.keyCode === S_KEY) {
        this._shoot();
      } else if (e.keyCode === D_KEY) {
        this.img.src = "images/gohan-kamehaUp-2.png";
        this._shootUP();
      }
    };

    document.onkeyup = e => {
      if (e.keyCode === UP_KEY) {
        this.vy = 0;
      } else if (e.keyCode === DOWN_KEY) {
        this.vy = 0;
      } else if (e.keyCode === RIGHT_KEY) {
        this.img.src = "images/gohan-long-2.png";
        this.vx = 0;
      } else if (e.keyCode === D_KEY) {
        this.img.src = "images/gohan-long-2.png";
        
      }
    };
  }
}
