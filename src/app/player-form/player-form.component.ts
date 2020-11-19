import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IPlayer } from 'src/app/model/player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  @Input() player : IPlayer;

  @Output() playerFormClose = new EventEmitter<IPlayer>();

  message: string = '';
  isNewPlayerForm: boolean = false;
  playerForm: FormGroup;

  

  get firstName() {
    return this.playerForm.get('firstName');
  }
  get lastName() {
    return this.playerForm.get('lastName');
  }
  get teamName() {
    return this.playerForm.get('teamName');
  }

  get age() {
    return this.playerForm.get('age');
  }

  get position() {
    return this.playerForm.get('position');
  }

  constructor() { }

  ngOnInit(): void {
    console.table(this.player);
    if (this.player == null) {
      this.player = {firstName:'', lastName: '', teamName: '', id:'', age:'', position:'', jerseyNumber:''};
      this.isNewPlayerForm = true;
    }

    this.playerForm = new FormGroup({
      firstName: new FormControl(this.player.firstName, [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl(this.player.lastName, [Validators.required, Validators.minLength(2)]),
      //teamName: new FormControl(this.playerForm.teamName,[Validators.required]),
      age: new FormControl(this.player.age, [Validators.required]),
      position: new FormControl(this.player.position, [Validators.required]),
    });
  }

  onSubmit() {
    this.playerFormClose.emit(this.playerForm.value)
  }

  closeForm(){
    this.playerFormClose.emit(null)
  }

}




