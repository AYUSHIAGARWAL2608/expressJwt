'use strict';

const express = require('express')
const app = express()
const cors = require('cors');
let mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('./database/database');

const config = require('config'); // get our config file

let routes = require('./routes/routes');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

// apply the routes to our application with the prefix /api
app.use('/api', routes);

app.listen(config.port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
})