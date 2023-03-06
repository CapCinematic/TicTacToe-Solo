// file that contains all DOM related JavaScript
var yin = new Player("Player1", "🤍", "Yin")
var yang = new Player("Player2", "🖤", "Yang")
var newGame = new Game(yin, yang)
var gameGrid = document.querySelector(".grid-container")
var asideClass = document.querySelector(".aside")
var player1 = document.querySelector("#player-1")
var player2 = document.querySelector("#player-2")
var actionSection = document.querySelector(".action-section")
var tokenBoxes = document.querySelectorAll(".token-box")


// gameGrid.addEventListener("click", takeTurn)
console.log(tokenBoxes)
for (var i = 0; i < tokenBoxes.length; i++){
  tokenBoxes[i].addEventListener("click", takeTurn)
}

function takeTurn(event){
  console.log(newGame.turn)
  placeToken(event)
  newGame.turn.addTile(event.target.id)
  newGame.checkForWins()
  newGame.checkForDraw()
  newGame.switchTurns()

}

function placeToken(event){
  console.log(event.target.id)
  if(newGame.turn === yin){
    event.target.innerText= yin.token
  } else {
    event.target.innerText= yang.token
  }

}

// function switchTurns(){
//   console.log(newGame.turn.token)
//   if(event.target.classList === "token-box"){
  
//   }
//   if(newGame.turn === yin){
//    newGame.turn = yang
//    newGame.switchTurns()
//   } else if (newGame.turn === yang){
//     newGame.turn = yin
//   }
// }

function clearBoard(){

}
 
// }
