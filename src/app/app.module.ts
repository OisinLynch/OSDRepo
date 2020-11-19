import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PlayerComponent } from '/player/player.component';
import { PlayerDetailsComponent } from './player/player-details/player-details.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerRowComponent } from './player/player-row/player-row.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerFormComponent } from './player-form/player-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    //PlayerComponent,
    PlayerDetailsComponent,
    PlayerListComponent,
    PlayerRowComponent,
    PlayerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
