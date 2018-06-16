import {RESTART_GAME, CLICK_SQUARE, GENERATE_AURAL_UPDATE, XPLAYER_WIN, OPLAYER_WIN, GET_STATS_SUCCESS, USER_LOGIN_SUCCESS, USER_SIGNUP_SUCCESS} from './actions';
import React from 'react';
import Square from './components/square'
import CheckWinner from './components/check-winner'
import computerPlay from './components/computer-play'


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

    if (action.type === GENERATE_AURAL_UPDATE) {

    }

    if (action.type === XPLAYER_WIN) {
        return Object.assign({}, state, {
            xWinner: true
        })
    }

    if (action.type === OPLAYER_WIN) {
        return Object.assign({}, state, {
            oWinner: true
        })
    }

    if (action.type === CLICK_SQUARE) {
        const newSquares = [...state.squares]
        let squareToUpdate = newSquares.find(square => square.id === action.id)
        
        
        if (!squareToUpdate.container) {
            const xPlayer = [...state.xPlayer];
            const oPlayer = [...state.oPlayer]
            let xWinner = state.xWinner;
            let oWinner = state.oWinner
            let totalSquares = state.totalSquares
            let index = totalSquares.indexOf(action.id)
            
            squareToUpdate.container = 'X'
            xPlayer.push(action.id)
            if (index > -1) {
                totalSquares.splice(index, 1)
            }
            if ( 
                (xPlayer.includes(1) && xPlayer.includes(2) && xPlayer.includes(3)) || 
                (xPlayer.includes(1) && xPlayer.includes(4) && xPlayer.includes(7)) ||
                (xPlayer.includes(1) && xPlayer.includes(5) && xPlayer.includes(9)) ||
                (xPlayer.includes(2) && xPlayer.includes(5) && xPlayer.includes(8)) ||
                (xPlayer.includes(3) && xPlayer.includes(5) && xPlayer.includes(7)) ||
                (xPlayer.includes(3) && xPlayer.includes(6) && xPlayer.includes(9)) ||
                (xPlayer.includes(4) && xPlayer.includes(5) && xPlayer.includes(6)) ||
                (xPlayer.includes(7) && xPlayer.includes(8) && xPlayer.includes(9))
                ) {
                    //player has won
                    
                    return Object.assign({}, state, {
                        squares: newSquares,
                        xPlayer,
                        oPlayer,
                        totalSquares,
                        xWinner: true
                    })    
                }  
                
                
                //computer play
                console.log(totalSquares)
                
            
            
                if (totalSquares.length) {

                
                let computerGuess = totalSquares[Math.floor( Math.random() * totalSquares.length )];
                squareToUpdate = newSquares.find(square => square.id === computerGuess)
                squareToUpdate.container = 'O'

                // <ComputerPlay />
                oPlayer.push(computerGuess)
                index = totalSquares.indexOf(computerGuess)
                if (index > -1) {
                    totalSquares.splice(index, 1)
                }
                console.log(totalSquares)
                
                if ( 
                    (oPlayer.includes(1) && oPlayer.includes(2) && oPlayer.includes(3)) || 
                (oPlayer.includes(1) && oPlayer.includes(4) && oPlayer.includes(7)) ||
                (oPlayer.includes(1) && oPlayer.includes(5) && oPlayer.includes(9)) ||
                (oPlayer.includes(2) && oPlayer.includes(5) && oPlayer.includes(8)) ||
                (oPlayer.includes(3) && oPlayer.includes(5) && oPlayer.includes(7)) ||
                (oPlayer.includes(3) && oPlayer.includes(6) && oPlayer.includes(9)) ||
                (oPlayer.includes(4) && oPlayer.includes(5) && oPlayer.includes(6)) ||
                (oPlayer.includes(7) && oPlayer.includes(8) && oPlayer.includes(9))
                ) {
                    //computer has won
                    return Object.assign({}, state, {
                        squares: newSquares,
                        xPlayer,
                        oPlayer,
                        totalSquares,
                        oWinner: true
                    })
                }
                else {
                    return Object.assign({}, state, {
                        squares: newSquares,
                        xPlayer,
                        oPlayer,
                        totalSquares
                    })
                }
                               
            }
                else {
                    //game is a draw

                    return Object.assign({}, state, {
                        squares: newSquares,
                        xPlayer,
                        oPlayer,
                        totalSquares,
                        gameDraw: true
                    })
                }
            
            return state;
                
        }
            
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