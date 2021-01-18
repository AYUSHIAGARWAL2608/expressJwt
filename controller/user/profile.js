'use strict';

let userModel = require('../../models/user');
let mongoose = require('mongoose');

let getUserDetail = (req, res) => {
    let conditions = {
        _id: mongoose.Types.ObjectId(req.params.userId)
    }
    userModel.findOne(
        conditions,
        (err, userDetail) => {
            if (err) {
                return res.status(400).json({ success: false, isError: true, error: err });
            } else {
                if (userDetail) {
                    return res.status(200).json({ success: true, message: "Details of the given user as per the user Id.", user: userDetail });
                } else {
                    return res.status(201).json({ success: false, message: "No user exists for the given user Id.", user: {} });
                }
            }
        });
};

module.exports = getUserDetail;