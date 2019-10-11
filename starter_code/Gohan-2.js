const UP_KEY = 40
const DOWN_KEY = 38
const S_KEY = 83
const RIGHT_KEY = 39
const LEFT_KEY = 37
const D_KEY = 68

class Gohan {
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

    this.kameSound = new Audio(
      "http://www.sonidosmp3gratis.com/sounds/ball-dragon-gt-jump.mp3"
    );

    this.img = new Image();
    this.img.src = "images/gohan-long.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;

    this.tick = 0;

    this.actions = {
      up: false,
      down: false
    };

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

    

    this.tick++;

    this.kameha.forEach(k => k.draw());
    this.kamehaUp.forEach(ku => ku.draw());
  }

  move() {
    this._animate()
    this._applyActions(); 

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
    this.kamehaUp.push(
      new KamehaUp(this.ctx, this.x + this.w, this.y + this.h)
    );
  }

    _setListeners() {
    document.onkeydown = e => {
      document.onkeydown = e => this._switchAction(e.keyCode, true);
      document.onkeyup = e => this._switchAction(e.keyCode, false);
    }
  }

  _applyActions() {
    if (this.actions.up) {
      this.vy = 7.5;
    }else{
      this.vy = 0;
    }
    if (this.actions.down) {
      this.vy = -5;
    }else{
      this.vy = 0;
    }
    if (this.actions.right) {
      this.vx = 7.5;
    }else{
      this.vx = 0;
    }
    if (this.actions.left) {
      this.vx = -7.5;
    }
    if (this.actions.s) {
      this._shoot();
    }
    if (this.actions.d) {
      this._switchAction;
      this._shootUP();
    }
  }

  _switchAction(key, apply) {
    switch (key) {
      case UP_KEY:
        this.actions.up = apply
        break
      case DOWN_KEY:
        this.actions.down = apply
        break
      case RIGHT_KEY:
        this.actions.right = apply
        break
      case LEFT_KEY:
        this.actions.left = apply
        break
      case S_KEY:
        this.actions.s = apply
        break
      case D_KEY:
        this.actions.d = apply
        break
    }
  }


  }

