'use strict';

const express = require('express')
const app = express()
const config = require('config'); // get our config file

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(config.port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
})