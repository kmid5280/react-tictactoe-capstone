import React from 'react';

export const getStats = () => {
    fetch(`./users`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json;
    }).then(stat => {
        dispatch(getStatsSuccess(stat))
    })
} 