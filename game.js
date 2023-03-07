var gameDisplay = document.querySelector(".game-display")
var winCounterBox = document.querySelector(".win-counter")
var winCounterBox2 = document.querySelector(".win-counter2")

var quotes = [
  "Check Your Vibes",
  "There is no spoon", 
  "Time is not real",
  "Wow!",
  "Do Your Thing!",
  "Tic-Tac-No!"]


class Game {
  constructor(player1, player2){
    this.winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]]
    this.player1 = player1
    this.player2 = player2
    this.turn = player1
    this.moves = 0
    this.winner = undefined
  }
  
  switchTurns(){
    if (event.target.classList === "token-box"){

    }
    if(this.turn === this.player1){
     this.turn = this.player2
    } else if (this.turn === this.player2){
      this.turn = this.player1
    }
  }

  buttonSwitch(disabled){
    for (var i = 0; i < tokenBoxes.length; i++){
      tokenBoxes[i].disabled = disabled
    }
  }

  checkForWins(){ 
    this.moves ++
    gameDisplay.innerText = quotes[getRandomIndex(quotes)]
    for (var i = 0; i < this.winningCombos.length; i++){
      var combos = this.winningCombos[i]
      if(this.player1.selectedTiles.includes(combos[0]) && this.player1.selectedTiles.includes(combos[1]) && this.player1.selectedTiles.includes(combos[2])){
        this.winner = this.player1
        this.player1.increaseWins()
        gameDisplay.innerHTML = `${this.player1.id} Wins!`
        winCounterBox.innerHTML = this.player1.wins
        // this.resetBoard()
        this.buttonSwitch(true)
      } else if (this.player2.selectedTiles.includes(combos[0]) && this.player2.selectedTiles.includes(combos[1]) && this.player2.selectedTiles.includes(combos[2])) {
        this.winner = this.player2
        this.player2.increaseWins()
        gameDisplay.innerHTML = `${this.player2.id} Wins!`
        winCounterBox2.innerHTML = this.player2.wins
        this.buttonSwitch(true)
      } 
    }
    
  }
// May have to re-order what happens first
  checkForDraw(){
    if(this.moves === 9 && this.winner === undefined){
      console.log("it was a draw")
      this.winner = "Draw"
      gameDisplay.innerHTML = `It's a draw!`
      this.buttonSwitch(true)
    }
  }

  // small function that enables, disables buttons
  resetBoard(){
      if(this.winner === this.player1 || this.winner === this.player2 || this.winner === "Draw"){
        this.moves = 0
        this.player1.selectedTiles = []
        this.player2.selectedTiles = []
        // this.player1.wins = 
        // this.player2.wins = 0
        this.winner = undefined
        console.log("Reset Board")
      }
      
    }
  
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

