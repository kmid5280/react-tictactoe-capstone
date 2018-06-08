const express = require('express')
const router = express.Router()
const {Stats} = require('./models')

router.get('/', jwtAuth, (req, res) => {
    Stats.find({
        user: req.user.id
    }).exec()
    .then(stat => {
        res.json(stat)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({message: 'server error'})
    })
})

router.post('/', jwtAuth, jsonParser, (req, res) => {
    const newStats = {}
    Stats.create({
        wins: 0,
        losses: 0,
        user: req.user.id
    })
    .then(post => res.status(201).json(post.serialize()))
    .catch(err => {
        console.error(err)
        res.status(500).json({message: 'server error'})
    })
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