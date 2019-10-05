// Creo Game
// Creo Background

1. script | 

creo const canvas
creo cons ctx

creo la función newGame
    la función crea un new Game(ctx)
    y dice que cuando game.run



2. Game.js |

crea un intervalo con run

run lo que hace más abajo es

run() {
    this.intervalId = setInterval(() => {

      this._draw()

    }, 1000 / 60)
  }

_draw() {
  this.bg.draw()
  }
}

