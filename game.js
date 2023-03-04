class Game {
  constructor(player1, player2){
    this.winningCombos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[1,5,9]]
    this.player1 = player1
    this.player2 = player2
    this.turn = player1
  }
  switchTurns(){
    if(this.turn === this.player1){
     this.turn = this.player2
    } else if (this.turn === this.player2){
      this.turn = this.player2
    }
  }
  checkForWins(){
    for (var i = 0; i < this.winningCombos.length; i++){
      var combos = this.winningCombos[i]
      // combos are the mini arrays
      var space1 = document.getElementById(parseInt(combos[0])).innerHTML
      var space2 = document.getElementById(parseInt(combos[1])).innerHTML
      var space3 = document.getElementById(parseInt(combos[2])).innerHTML
      if(this.player1.token === space1 && this.player1.token === space2 && this.player1.token === space3){
        this.player1.increaseWins()
        return 'You Won!'
      } else if (this.player2.token === space1 && this.player2.token === space2 && this.player2.token === space3) {
        this.player2.increaseWins()
        return "You Won!"
      } else {
        this.checkForDraw()
      }
    }
    
  }
// May have to re-order what happens first
  checkForDraw(){
    return "This is a draw"
  }
}