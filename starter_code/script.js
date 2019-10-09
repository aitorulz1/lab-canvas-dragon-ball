window.onload = function() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  document.getElementById("reset-button").onclick = function() {
    pauseGame();
  };

  function startGame() {
    const game = new Game(ctx);
    game.run();
  }

  function pauseGame() {
    game.stopClick()
  }
};


