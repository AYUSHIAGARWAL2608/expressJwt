'use strict';

let userModel = require('../../models/user');

let getUserDetail = (req, res) => {
    let conditions = {
        "_id": req.decoded._id,
    }
    userModel.findOne(
        conditions,
        (err, userDetail) => {
            if (err) {
                return res.json({ success: false, isError: true, error: err });
            } else {
                if (userDetail) {
                    return res.json({ success: true, message: "Details of the given user as per the user Id.", user: userDetail });
                } else {
                    return res.json({ success: false, message: "No user exists for the given user Id.", user : {} });
                }
            }
        });
};

module.exports = getUserDetail;