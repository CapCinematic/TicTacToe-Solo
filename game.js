var gameDisplay = document.querySelector(".game-display");
var winCounterBox = document.querySelector(".win-counter");
var winCounterBox2 = document.querySelector(".win-counter2");
var titleBox = document.querySelector(".game-title");

class Game {
  constructor(player1, player2) {
    this.winningCombos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [3, 5, 7],
      [1, 5, 9],
    ];
    this.player1 = player1;
    this.player2 = player2;
    this.turn = player1;
    this.moves = 0;
    this.winner = undefined;
  }

  switchTurns() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else if (this.turn === this.player2) {
      this.turn = this.player1;
    }
    gameDisplay.innerText = `It's ${this.turn.id}'s Turn!`;
  }

  buttonSwitch(disabled) {
    for (var i = 0; i < tokenBoxes.length; i++) {
      tokenBoxes[i].disabled = disabled;
    }
  }

  checkForWins() {
    this.moves++;
    for (var i = 0; i < this.winningCombos.length; i++) {
      var combos = this.winningCombos[i];
      if (
        this.player1.selectedTiles.includes(combos[0]) &&
        this.player1.selectedTiles.includes(combos[1]) &&
        this.player1.selectedTiles.includes(combos[2])
      ) {
        this.winner = this.player1;
        this.player1.increaseWins();
        titleBox.innerHTML = `🤍${this.player1.id} Wins!🤍`;
        winCounterBox.innerHTML = this.player1.wins;
        this.buttonSwitch(true);
      } else if (
        this.player2.selectedTiles.includes(combos[0]) &&
        this.player2.selectedTiles.includes(combos[1]) &&
        this.player2.selectedTiles.includes(combos[2])
      ) {
        this.winner = this.player2;
        this.player2.increaseWins();
        titleBox.innerHTML = `🖤${this.player2.id} Wins!🖤`;
        winCounterBox2.innerHTML = this.player2.wins;
        this.buttonSwitch(true);
      }
    }
  }

  checkForDraw() {
    if (this.moves === 9 && this.winner === undefined) {
      console.log("it was a draw");
      this.winner = "Draw";
      titleBox.innerHTML = `🖤It's a Draw!🤍`;
      this.buttonSwitch(true);
    }
  }

  resetBoard() {
    if (
      this.winner === this.player1 ||
      this.winner === this.player2 ||
      this.winner === "Draw"
    ) {
      this.moves = 0;
      this.player1.selectedTiles = [];
      this.player2.selectedTiles = [];
      this.winner = undefined;
      console.log("Reset Board");
    }
  }
}
