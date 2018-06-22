import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const UPDATE_STATS_IN_USER = 'UPDATE_STATS_IN_USER';
export const updateStatsInUser = (user, xWinner, oWinner, gameDraw) => ({
  type: UPDATE_STATS_IN_USER,
  user,
  xWinner,
  oWinner,
  gameDraw
});

export const registerUser = user => dispatch => {
    
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const endGame = (userId, authToken, wins, losses, draws, xWinner, oWinner, gameDraw) => dispatch => {
    const reqBody = {wins: wins, losses: losses, draws: draws}
    
    return fetch(`${API_BASE_URL}/users/${userId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify(reqBody)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(user => {
          dispatch(updateStatsInUser(user, xWinner, oWinner, gameDraw));
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
}
