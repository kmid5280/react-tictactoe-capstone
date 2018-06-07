const mongoose = require('mongoose')

const statsSchema = mongoose.Schema({
    wins: Number,
    losses: Number
})

statSchema.methods.serialize = function() {
    return {
        id: this.id,
        wins: this.wins,
        losses: this.losses
    }
}

const Stats = mongoose.model("Stats", statsSchema)

module.exports = Stats