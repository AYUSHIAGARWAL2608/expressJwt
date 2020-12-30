'use strict';


// Define schema
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence')(mongoose);


let userSchema = new Schema({
    id: { type: Number },
    username: { type: String, index: 'text' },
    password: { type: String },
    name: { type: String, default: 'enter you name' },
    age: { type: Number, min: 15, index: true },
    bio: { type: String, match: /[a-z]/ },
    dob: { type: Date },
    imageUrl: { type: String, default: 'profile.png' },
    created: Date,
    updated: Date,
});

// set up a mongoose model and pass it using module.exports
userSchema.plugin(AutoIncrement, { inc_field: 'id', id: "userId" });

// Compile model from schema
let userModel = mongoose.model('user', userSchema);

module.exports = userModel;