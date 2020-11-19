import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../../model/player'
import { PlayerService  }  from '../../player.service'


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  playerList: IPlayer[];
  message: string;
  showPlayerForm: boolean = false;

  currentPlayer : IPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {


    this.playerService.getPlayers().subscribe({
      next: (value: IPlayer[] )=> this.playerList = value,
      complete: () => console.log('player service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (player: IPlayer): void {
    this.currentPlayer = player;
  }

  openEditPlayer(): void {
    this.showPlayerForm = true;
  }

  openAddPlayer(): void {
    this.currentPlayer = null;
    this.showPlayerForm = true;
  }

  openDeletePlayer(): void {
    this.currentPlayer = null;
    //this.showPlayerForm = true;
  }

  playerFormClose(player: IPlayer): void{
    this.showPlayerForm = null;
    console.table(player);
    if (player == null){
      this.currentPlayer = null;
    }
    else if (this.currentPlayer == null){
      this.addNewPlayer(player);
    }
    else {
      console.log('need to update player with id ' + this.currentPlayer.id);
      this.updatePlayer(this.currentPlayer.id, player)
    }
  }

  updatePlayer (id: string, player: IPlayer){
    this.playerService.updatePlayer(id, player)
    .subscribe({
      next: player => this.message = "player has been modified",
      error: (err) => this.message = err
    });

    // so the updated list appears

    this.playerService.getPlayers().subscribe({
      next: (value: IPlayer[]) => this.playerList = value,
      complete: () => console.log('player service finished'),
      error: (mess) => this.message = mess
    })
}

/*
 deletePlayer (id: string, player: IPlayer) {
   this.playerService.deletePlayer().subscribe({
    next: (value: IPlayer[] )=> this.playerList = value,
    complete: () => console.log('player service finished'),
    error: (mess) => this.message = mess
   })
 }*/

addNewPlayer(newPlayer: IPlayer): void {
  console.log('adding new player ' + JSON.stringify(newPlayer));
  this.playerService.addPlayer({ teamName: 'dsfdsfa', ...newPlayer })
    .subscribe({
      next: player => {
        console.log(JSON.stringify(player) + ' has been added');
      this.message = "new player has been added";},
      error: (err) => this.message = err
    });
}

isSelected(player: IPlayer): boolean{
  if (!player || !this.currentPlayer) {
    return false;
  }
  else {
    return player.id === this.currentPlayer.id;
  }
}



}
