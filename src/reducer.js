import {RESTART_GAME, CLICK_SQUARE, GENERATE_AURAL_UPDATE} from './actions';
import React from 'react';
import Square from './components/square'



const initialState = {
    board: {
        row1: [<Square />, <Square />, <Square />],
        row2: [<Square />, <Square />, <Square />],
        row3: [<Square />, <Square />, <Square />]
        },
    playerTurn: 1,
    container: ''
}


export default (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            board: {
                row1: [<Square />, <Square />, <Square />],
                row2: [<Square />, <Square />, <Square />],
                row3: [<Square />, <Square />, <Square />]
                },
            playerTurn: 1,
            container: ''
        })
    }

    if (action.type === GENERATE_AURAL_UPDATE) {

    }

    if (action.type === CLICK_SQUARE) {
        return Object.assign({}, state, {
            container: 'X'
        })
    }
    return state;
}