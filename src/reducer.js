import {RESTART_GAME, CLICK_SQUARE, GENERATE_AURAL_UPDATE, XPLAYER_WIN, OPLAYER_WIN, GET_STATS_SUCCESS, USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS, UPDATE_STATS} from './actions';
import React from 'react';
import Square from './components/square'
import CheckWinner from './components/check-winner'
import {UPDATE_STATS_IN_USER} from "./actions/users";


const initialState = {
    
    squares: [{id: 1, container: ''}, {id: 2, container: ''}, {id: 3, container: ''},
        {id: 4, container: ''}, {id: 5, container: ''}, {id: 6, container: ''},
        {id: 7, container: ''}, {id: 8, container: ''}, {id: 9, container: ''}],
    playerTurn: true,
    xPlayer: [],
    oPlayer: [],
    totalSquares: [1,2,3,4,5,6,7,8,9],
    xWinner: false,
    oWinner: false,
    gameDraw: false,
    /*wins: state.auth.currentUser.wins,
    losses: state.auth.currentUser.losses,
    draws: state.auth.currentUser.draws*/
   
}

export default (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            squares: [{id: 1, container: ''}, {id: 2, container: ''}, {id: 3, container: ''},
            {id: 4, container: ''}, {id: 5, container: ''}, {id: 6, container: ''},
            {id: 7, container: ''}, {id: 8, container: ''}, {id: 9, container: ''}],
            playerTurn: true,
            xPlayer: [],
            oPlayer: [],
            totalSquares: [1,2,3,4,5,6,7,8,9],
            xWinner: false,
            oWinner: false,
            gameDraw: false
            
        })
    }

    if(action.type === UPDATE_STATS_IN_USER) {
        return Object.assign({}, state, {
            xWinner: action.xWinner,
          oWinner: action.oWinner,
          gameDraw: action.gameDraw
        });
    }

    if (action.type === GENERATE_AURAL_UPDATE) {

    }

    if (action.type === XPLAYER_WIN) {
        return Object.assign({}, state, {
            xWinner: true,

        })
    }

    if (action.type === OPLAYER_WIN) {
        return Object.assign({}, state, {
            oWinner: true
        })
    }

   

    if (action.type === CLICK_SQUARE) {

        return Object.assign({}, state, {
            squares: [...action.squares],
            xPlayer: [...action.xPlayer],
            oPlayer: [...action.oPlayer],
            totalSquares: [...action.totalSquares]
        })
    }
    if (action.type === USER_SIGNUP_SUCCESS) {
        return state;
    }
    if (action.type === USER_LOGIN_SUCCESS) {
        return state;
        console.log(state)
    }

    if (action.type === GET_STATS_SUCCESS) {
        return state;
    }
    return state;
}