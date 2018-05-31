export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE' //this will display the current win/loss ratio
export const generateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
})

export const RESTART_GAME = 'RESTART_GAME'
export const restartGame = () => ({
    type: RESTART_GAME,
}) //I will want this to run when the 'restart game' button is pressed. it won't be necessary for the player to have actually won

export const CLICK_SQUARE = 'CLICK_SQUARE';
export const clickSquare = id => ({
    type: CLICK_SQUARE,
    id
    
})