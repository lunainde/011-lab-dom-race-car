window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    restartGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();

    // Now that the game has started, add keydown event listeners
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyup);
  }

  // ITERATION 5 - f(x) handles keydown event
  function handleKeydown(event) {
    const key = event.key;
    // Check if the game and player have been initialized
    if (game && game.player) {
      const possibleKeystrokes = ["ArrowLeft", "ArrowRight"];

      if (possibleKeystrokes.includes(key)) {
        event.preventDefault(); // Prevent scrolling the window with arrow keys

        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
        }
      }
    }
  }

  function handleKeyup(event) {
    const key = event.key;

    // Check if the game and player have been initialized
    if (game && game.player) {
      if (key === "ArrowLeft" || key === "ArrowRight") {
        // Stop the player's horizontal movement when the arrow keys are released
        game.player.directionX = 0;
      }
    }
  }

  function restartGame() {
    location.reload();
  }
};
