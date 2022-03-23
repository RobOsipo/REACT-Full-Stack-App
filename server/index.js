const express = require('express');

const app = express();

const db = require('./models')


app.get('/', (req, res) => {
    res.send('whats good?')
})

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('listening on port 3001')
    })
})



