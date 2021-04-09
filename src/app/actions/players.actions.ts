import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { IPlayer } from '../model/player'

export const ADD_PLAYER = '[PLAYER] ADD'
export const EDIT_PLAYER = '[PLAYER] EDIT'
export const REMOVE_PLAYER = '[PLAYER] REMOVE'

export class AddPlayer implements Action {
    readonly type = ADD_PLAYER

    constructor(public payload: IPlayer) {}
}

export class EditPlayer implements Action {
    readonly type = EDIT_PLAYER

    constructor(public payload: number) {}
}

export class RemovePlayer implements Action {
    readonly type = REMOVE_PLAYER

    constructor(public payload: number) {}
}

export type Actions = AddPlayer | EditPlayer | RemovePlayer