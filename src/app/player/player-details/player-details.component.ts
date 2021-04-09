import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from '../../model/player';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() player : IPlayer;

  players: Observable<IPlayer[]>;

  constructor(private store: Store<AppState>) {
    this.players = store.select('player')
   }

  ngOnInit(): void {
  }

}
