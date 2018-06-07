const express = require('express')
const router = express.Router()
const UserStats = require('./models')

router.get('/', (req, res, next) => {
    UserStats.find()
    .then(stats => res.json(stats.map(stat => stat.serialize())))
    .then(res.status(200))
    .catch(next)
})

router.post('/', (req, res, next) => {
    //new user only
})

router.put('/:id', (req, res, next) => {
    //update stats for existing user
    const id = req.params.id
    const updateStats = ['wins', 'losses']
    const updateItem = {}
    updateStats.forEach(stat => {
        if (field in req.body) {
            updateStats[field] = req.body[field]
        }
    })

})

//need jwt auth