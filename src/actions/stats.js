import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const newStats = stats => dispatch => {
    
    return fetch(`${API_BASE_URL}/stats`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(stats)
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

export const updateStats = stats => dispatch => {
    
    return fetch(`${API_BASE_URL}/stats/:id`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(stats)
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