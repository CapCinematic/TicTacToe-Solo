class Player {
  constructor(playerName, token, id){
    this.name = playerName, 
    this.token = token, 
    this.wins = 0,
    this.id = id
    this.selectedTiles = []
    };
    
    addTile(id){
      this.selectedTiles.push(Number(id))
    }
 
  increaseWins(){
    this.wins ++
    
  }
}

