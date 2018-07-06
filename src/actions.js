
export const RESTART_GAME = 'RESTART_GAME'
export const restartGame = () => ({
    type: RESTART_GAME,
}) //I will want this to run when the 'restart game' button is pressed. it won't be necessary for the player to have actually won

export const CLICK_SQUARE = 'CLICK_SQUARE';
export const clickSquare = (squares, xPlayer, oPlayer, totalSquares) => ({
    type: CLICK_SQUARE,
    squares,
    xPlayer,
    oPlayer,
    totalSquares
})

export const XPLAYER_WIN = 'XPLAYER_WIN';
export const xPlayerWin = () => ({
    type: XPLAYER_WIN
})

export const OPLAYER_WIN = 'OPLAYER_WIN';
export const oPlayerWin = () => ({
    type: OPLAYER_WIN
})

export const UPDATE_STATS = 'UPDATE_STATS'
export const updateStats = (wins, losses, draws) => ({
    type: UPDATE_STATS,
    wins,
    losses,
    draws
})

export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS'
export const getStatsSuccess = () => ({
    type: GET_STATS_SUCCESS
})

export const GET_STATS_ERROR = 'GET_STATS_ERROR'
export const getStatsError = err => ({
    type: GET_STATS_ERROR,
    err
})

export const getStats = stats => dispatch => {
    const token = localStorage.getItem("token")
    if (!token) {
        console.log('getstats error')
    }
    
    fetch(`https://stark-hamlet-33607.herokuapp.com/stats/`, {
        body: JSON.stringify(stats),
        method: 'GET',
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer " + token 
        }
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(stats => {
        dispatch(getStatsSuccess(stats));
    }).catch(err => {
        dispatch(getStatsError(err));
    });
}
