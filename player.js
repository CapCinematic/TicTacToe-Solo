class Player {
  constructor(playerName, token){
    this.user = ({
      name: playerName, 
      token: token, 
      wins: [],
      turn: true
    });
    this.id = Date.now();
  }

  increaseWins(){
    this.wins ++
  }
}

