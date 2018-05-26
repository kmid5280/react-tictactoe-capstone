import {RESTART_GAME, CLICK_SQUARE, GENERATE_AURAL_UPDATE} from './actions';

const initialState = {
    board: {
        row1: [<Square />, <Square />, <Square />],
        row2: [<Square />, <Square />, <Square />],
        row3: [<Square />, <Square />, <Square />]
        },
    playerTurn: 1
}

export default (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            board: {
                row1: [<Square />, <Square />, <Square />],
                row2: [<Square />, <Square />, <Square />],
                row3: [<Square />, <Square />, <Square />]
                },
            playerTurn: 1
        })
    }

    if (action.type === GENERATE_AURAL_UPDATE) {

    }

    if (action.type === CLICK_SQUARE) {
        return Object.assign({}, state, {

        })
    }
}