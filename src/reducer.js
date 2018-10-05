import {RESTART_GAME, CLICK_SQUARE, XPLAYER_WIN, OPLAYER_WIN, GET_STATS_SUCCESS, USER_LOGIN_SUCCESS} from './actions';
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

    if (action.type === GET_STATS_SUCCESS) {
        return state;
    }
    return state;
}