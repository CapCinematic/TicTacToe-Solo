var yin = new Player("Player1", "🤍", "Yin");
var yang = new Player("Player2", "🖤", "Yang");
var newGame = new Game(yin, yang);
var gameGrid = document.querySelector(".grid-container");
var asideClass = document.querySelector(".aside");
var player1 = document.querySelector("#player-1");
var player2 = document.querySelector("#player-2");
var actionSection = document.querySelector(".action-section");
var tokenBoxes = document.querySelectorAll(".token-box");

for (var i = 0; i < tokenBoxes.length; i++) {
  tokenBoxes[i].addEventListener("click", takeTurn);
}

function takeTurn(event) {
  event.target.disabled = true;
  console.log(newGame.turn);
  placeToken(event);
  newGame.turn.addTile(event.target.id);
  newGame.checkForWins();
  newGame.checkForDraw();
  newGame.switchTurns();
  if (newGame.winner) {
    setTimeout(clearBoard, 3000);
  }
}

function placeToken(event) {
  if (newGame.turn === yin) {
    event.target.innerText = yin.token;
  } else {
    event.target.innerText = yang.token;
  }
}

function clearBoard() {
  for (var i = 0; i < tokenBoxes.length; i++) {
    tokenBoxes[i].innerHTML = "";
    tokenBoxes[i].disabled = false;
  }
  newGame.resetBoard();
  gameDisplay.innerHTML = "Focus On balance";
  titleBox.innerHTML = "Yin Yang Yo!";
}
