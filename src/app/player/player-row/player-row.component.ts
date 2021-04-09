import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/model/player';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-player-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.css']
})
export class PlayerRowComponent implements OnInit {

  @Input() player: IPlayer;

  players: Observable<IPlayer[]>;

  constructor(private store: Store<AppState>) {
    this.players = store.select('player')
   }

  ngOnInit(): void {
  }

}
