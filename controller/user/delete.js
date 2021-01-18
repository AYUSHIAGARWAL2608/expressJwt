"use strict"

let mongoose = require('mongoose');
let userModel = require('../../models/user');

let deleteUser = (req, res) => {

    userModel.deleteOne({ _id: mongoose.Types.ObjectId(req.params.userId) },
        (err, userRes) => {
            if (err) {
                console.log(err);
                return res.status(400).json({ success: false, isError: true, error: err });
            } else {
                if (userRes.n == 1 && userRes.ok == 1) {
                    return res.status(200).json({ success: true, message: "User deleted successfully ", user: userRes })
                } else {
                    return res.status(201).json({ success: false, message: "User is unable to delete" })
                }
            }
        });
}

module.exports = [
    deleteUser
];
