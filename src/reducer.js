import {RESTART_GAME, CLICK_SQUARE, GENERATE_AURAL_UPDATE} from './actions';
import React from 'react';
import Square from './components/square'


const initialState = {
    
    squares: [{id: 1, container: ''}, {id: 2, container: ''}, {id: 3, container: ''},
        {id: 4, container: ''}, {id: 5, container: ''}, {id: 6, container: ''},
        {id: 7, container: ''}, {id: 8, container: ''}, {id: 9, container: ''}],
    playerTurn: true,
    xPlayer: [],
    oPlayer: []
   
}

const squareReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_SQUARE: {
            const squares = [...state.squares]
            const square = squares.find(square => square.id === action.light_id)
            return Object.assign({}, state, {
                squares: squares
            })
        }
    }

}


export default (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            board: {
                row1: [{id: 1, container: ''}, {id: 2, container: ''}, {id: 3, container: ''}],
                row2: [{id: 4, container: ''}, {id: 5, container: ''}, {id: 6, container: ''}],
                row3: [{id: 7, container: ''}, {id: 8, container: ''}, {id: 9, container: ''}]
                },
            playerTurn: true
            
        })
    }

    if (action.type === GENERATE_AURAL_UPDATE) {

    }

    if (action.type === CLICK_SQUARE) {
        const newSquares = [...state.squares]
        const squareToUpdate = newSquares.find(square => square.id === action.id)
        if (!squareToUpdate.container) {
            const xPlayer = [...state.xPlayer];
            const oPlayer = [...state.oPlayer]
            
            if (state.playerTurn) {
                squareToUpdate.container = 'X'
                xPlayer.push(action.id)
            }
            else {
                squareToUpdate.container = 'O'
                oPlayer.push(action.id)
            
            }
                 
        
            return Object.assign({}, state, {
                squares: newSquares,
                playerTurn: !state.playerTurn,
                xPlayer,
                oPlayer
            })
        }
        return state;
    }
    return state;
}