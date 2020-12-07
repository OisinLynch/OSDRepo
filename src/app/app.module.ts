import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

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
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { appInitializer } from './helpers/app.initialiser';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    //PlayerComponent,
    PlayerDetailsComponent,
    PlayerListComponent,
    PlayerRowComponent,
    PlayerFormComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [UserService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
