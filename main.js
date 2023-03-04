// file that contains all DOM related JavaScript
var player1 = new Player("Player1", "🤍", "Yin")
var player2 = new Player("Player2", "🖤", "Yang")
var newGame = new Game(player1, player2)
var gameGrid = document.querySelector(".grid-container")
var asideClass = document.querySelector(".aside")
var player1 = document.querySelector("#player-1")
var player2 = document.querySelector("#player-2")
var actionSection = document.querySelector(".action-section")
// var tokenClick = document.querySelector(".token-box")
var playerTurn = player1

gameGrid.addEventListener("click", switchTurns)
console.log(gameGrid)

function placeToken(event){
  gameGrid.innerHTML = <div class="token-box"></div>


}

function switchTurns(){
  if(event.target.classList === "token-box"){
    return "place token"
  }
  if(playerTurn === player1){
    console.log("something1")
   playerTurn = player2
   newGame.switchTurns()
  } else if (playerTurn === player2){
    console.log()
    playerTurn = player1
  }
}


 
// }
