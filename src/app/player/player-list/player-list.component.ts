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

  currentBook : IPlayer;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {


    this.playerService.getPlayers().subscribe({
      next: (value: IPlayer[] )=> this.playerList = value,
      complete: () => console.log('player service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (book: IPlayer): void {
    this.currentBook = book;
  }

}
