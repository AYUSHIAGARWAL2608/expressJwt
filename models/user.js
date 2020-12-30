'use strict';


// Define schema
let Schema = mongoose.Schema;
let mongoose = require('mongoose');
let AutoIncrement = require('mongoose-sequence')(mongoose);


let userSchema = new Schema({
    name: { type: String, default: 'Ayushi' },
    age: { type: Number, min: 18, index: true },
    bio: { type: String, match: /[a-z]/ },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
});

// set up a mongoose model and pass it using module.exports
userSchema.plugin(AutoIncrement, { inc_field: 'id', id: "userId" });

// Compile model from schema
let userModel = mongoose.model('user', userSchema);

module.exports = userModel;