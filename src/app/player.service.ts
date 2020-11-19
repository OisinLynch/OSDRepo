import { Injectable } from '@angular/core';
import { IPlayer } from './model/player'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private dataUri = 'http://localhost:3000/players'

  constructor(private http: HttpClient) { }

  addPlayer(player: IPlayer): Observable<IPlayer> {
    return this.http.post<IPlayer>(this.dataUri, player)
      .pipe(
        catchError(this.handleError)
      )
  }

  updatePlayer(id: string, player: IPlayer): Observable<IPlayer> {
    console.log('subscribing to update' + id);
    let playerURI: string = this.dataUri + '/' + id;
    return this.http.put<IPlayer>(playerURI, player)
      .pipe(
        catchError(this.handleError)
      )
  }

  deletePlayer(id: string): Observable<void> {
    return this.http.delete<void>(`${this.dataUri}/${id}`)
    .pipe(catchError(this.handleError));
  }

  getPlayers(): Observable<IPlayer[]> {

    console.log("get players called" );



    return this.http.get<IPlayer[]>(`${this.dataUri}?limit=5`)
      .pipe(
        catchError(this.handleError)
      )
  }

  //taken from: https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

        if (error.status == 412) {
          return throwError('412 Error' + JSON.stringify(error.error))
        }
    }
    
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}

