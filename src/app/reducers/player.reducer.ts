import { Action } from '@ngrx/store'
import { IPlayer } from '../model/player'
import * as PlayerActions from '../actions/players.actions'

export function reducer(state: IPlayer[], action: PlayerActions.Actions) {
    switch(action.type) {
        case PlayerActions.ADD_PLAYER:
            return [...state, action.payload];
        case PlayerActions.EDIT_PLAYER:
            return [...state, action.payload];
        default:
            return state;
    }
}