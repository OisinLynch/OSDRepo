import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { PlayerComponent } from '/player/player.component';
import { PlayerDetailsComponent } from './player/player-details/player-details.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerRowComponent } from './player/player-row/player-row.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerFormComponent } from './player-form/player-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { appInitializer } from './helpers/app.initialiser';
import { UserService } from './user.service';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { OwlModule } from 'ngx-owl-carousel';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/player.reducer';

@NgModule({
  declarations: [
    AppComponent,
    //PlayerComponent,
    PlayerDetailsComponent,
    PlayerListComponent,
    PlayerRowComponent,
    PlayerFormComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OwlModule,
    FormsModule,
    StoreModule.forRoot({
      player: reducer
    })
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [UserService] },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
