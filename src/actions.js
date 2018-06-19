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

export const XPLAYER_WIN = 'XPLAYER_WIN';
export const xPlayerWin = () => ({
    type: XPLAYER_WIN
})

export const OPLAYER_WIN = 'OPLAYER_WIN';
export const oPlayerWin = () => ({
    type: OPLAYER_WIN
})
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const userSignupSuccess = data => ({
    type: USER_SIGNUP_SUCCESS,
    data
})

export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR'
export const userSignupError = err => ({
    type: USER_SIGNUP_ERROR,
    err
})

export const userSignup = user => dispatch => {
    
    fetch('http://localhost:8080/users', {
        body: JSON.stringify(user),
        method: 'POST',
        headers: {"content-type": "application/json"}
    }).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(user => {
        dispatch(userSignupSuccess(user));
    }).catch(err => {
        dispatch(userSignupError(err));
    });
};

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const userLoginSuccess = data => ({
    type: USER_LOGIN_SUCCESS,
    data
})

export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR'
export const userLoginError = err => {
    type: USER_LOGIN_ERROR,
    err
}

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
export const getStatsError = err => {
    type: GET_STATS_ERROR,
    err
}

export const getStats = stats => dispatch => {
    const token = localStorage.getItem("token")
    if (!token) {
        console.log('getstats error')
    }
    
    fetch('http://localhost:8080/stats/', {
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

