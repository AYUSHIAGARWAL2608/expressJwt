'use strict';

let userModel = require('../../models/user');

let getUserList = (req, res) => {
    let conditions = [
        {
            '$match': {}
        }, {
            '$skip': (Number(req.query.page) ? Number(req.query.page) : 0) * (Number(req.query.limit) ? Number(req.query.limit) : 8)
        }, {
            '$limit': (Number(req.query.limit) ? Number(req.query.limit) : 8)
        }, {
            '$sort': {
                'created': -1
            }
        }
    ]
    userModel.aggregate(
        conditions,
        (err, userList) => {
            if (err) {
                return res.status(400).json({ success: false, isError: true, error: err });
            } else {
                if (userList.length > 0) {
                    return res.status(200).json({ success: true, message: "List of user/s added.", users: userList });
                }
                else {
                    return res.status(201).json({ success: false, message: "No user added yet.", users: [] });
                }
            }
        });
};

module.exports = getUserList;