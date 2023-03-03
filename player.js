class Player {
  constructor(playerName, token){
    this.user = ({
      name: playerName, 
      token: token, 
      wins: 0,
      turn: true
    });
    this.id = Date.now();
  }

  increaseWins(){
    this.wins ++
  }
}

