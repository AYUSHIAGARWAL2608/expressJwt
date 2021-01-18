"use strict"

let mongoose = require('mongoose');
let userModel = require('../../models/user');

let updateUser = (req, res, next) => {
    userModel.updateOne({ _id: mongoose.Types.ObjectId(req.params.userId) },
        { $set: req.body },
        (err, userRes) => {
            if (err) {
                console.log(err);
                return res.status(400).json({ success: false, isError: true, error: err });
            } else {
                if (userRes.nModified == 1) {
                    return res.status(200).json({ success: true, message: "User updated successfully ", user: userRes })
                } else {
                    return res.status(201).json({ success: false, message: "User is unable to update. " })
                }
            }
        });
}

module.exports = [
    updateUser
]