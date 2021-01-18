'use strict';

const mongoose = require('mongoose');
const config = require('config');

// =======================
// configuration =========
// =======================

mongoose.connect(config.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, client) => {
    if (err) {
        return console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
    }
    else {
        if (client) {
            return console.log('Successfully Established Connection with MongoDB')
        } else {
            return console.log('Unable to setup connection')
        }
    }
}); // connect to database

mongoose.set('useFindAndModify', false);
mongoose.set('debug', true);

const database = mongoose.connection;

database.on('error',
    console.error.bind(console,
        'connection error:'));
database.once('open', () => {
    // we're connected!
    console.log("we're connected!");
});