import {RESTART_GAME, MAKE_SELECTION, GENERATE_AURAL_UPDATE} from './actions';

const initialState = {
//this will display an empty grid upon game start
}

export default (state = initialState, action) => {
    if (action.type === RESTART_GAME) {
        return Object.assign({}, state, {
            //blank grid code
        })
    }

    if (action.type === GENERATE_AURAL_UPDATE) {
        
    }
}