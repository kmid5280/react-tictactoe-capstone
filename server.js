const express = require('express')
const cors = require('cors')
const {CLIENT_ORIGIN} = require('./config')

//construct server code

const express = require('express')
const morgan = require('morgan')
const app = express();
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const passport = require('passport')
const { PORT, DATABASE_URL } = require('./config')
const { router: usersRouter } = require('./usersRouter')
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth')

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
    if (req.method === 'OPTIONS') {
        return res.send(204)
    }
    next();
})

passport.use(localStrategy);
passport.use(jwtStrategy)
const jwtAuth = passport.authenticate('jwt', {session: false})

app.use('/users', usersRouter)
app.use('/stats', statsRouter)

let server;

function runServer(databaseUrl, port = PORT) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                console.log(`Your app is listening on port ${port}`)
                resolve();
            })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                })
        })
    })
}

function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            })
        })
    })
}

if (require.main === module) {
    runServer(DATABASE_URL).catch(err => console.error(err))
}

module.exports = {app, runServer, closeServer};