const express = require('express')
const cors = require('cors')
const {CLIENT_ORIGIN} = require('./config')

//construct server code

const express = require('express')
const morgan = require('morgan')
const app = express();
const {PORT, DATABASE_URL} = require('./config')
const usersRouter = require('./usersRouter')

app.use('./users', usersRouter)

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