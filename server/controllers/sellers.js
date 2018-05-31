const mongoose = require('mongoose');
const Seller = mongoose.model('Seller');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    getAll: (req, res) => {
        Seller.find({}, (err, items) => {
            if (!err) {
                res.json({
                    message: 'Success',
                    data: items
                });
            } else {
                console.log(err);
                res.json({
                    message: 'Error',
                    error: err
                })
            }
        }).sort({
            name: 1
        });
    },

    getById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        Seller.find({
                _id: new ObjectId(req.params.id)
            })
            .exec((err, item) => {
                if (!err) {
                    res.json({
                        message: 'Success',
                        data: item
                    });
                } else {
                    console.log(err);
                    res.json({
                        message: 'Error',
                        error: err
                    })
                }
            });
    },

    create: (req, res) => {
        let item = new Seller(req.body);
        item._id = new mongoose.Types.ObjectId();
        item.hashPassword = bcrypt.hashSync(req.body.password, 10);
        item.save(err => {
            if (!err) {
                // Remove hash password before sending information to user
                item.hashPassword = undefined;
                res.json({
                    message: 'Success',
                    data: item
                });
            } else {
                console.log(item.errors);
                res.status(400).json({
                    message: 'Error',
                    error: err
                });
            }
        });
    },

    login: (req, res) => {
        Seller.findOne({
            email: req.body.email
        }, (err, item) => {
            if (err) throw err;
            if (!item) {
                res.status(401).json({
                    message: 'Error',
                    error: 'Authentication failed. No Seller found!'
                });
            } else if (item) {
                if (!item.comparePassword(req.body.password, item.hashPassword)) {
                    res.status(401).json({
                        message: 'Error',
                        error: 'Authentication failed. Wrong password!'
                    });
                } else {
                    return res.json({
                        token: jwt.sign({
                            email: item.email,
                            username: item.username,
                            _id: item._id
                        }, 'WhatAPIs')
                    });
                }
            }
        });
    },

    updateById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        const update = req.body;
        console.log(update);
        const opts = {
            runValidators: true
        };
        Seller.update({
            _id: new ObjectId(req.params.id)
        }, update, opts, function (err, item) {
            if (!err) {
                res.json({
                    message: 'Success',
                    data: item
                });
            } else {
                console.log(err);
                res.json({
                    message: 'Error',
                    error: err
                })
            }
        });
    },

    removeById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        Seller.remove({
                _id: new ObjectId(req.params.id)
            })
            .exec((err, item) => {
                if (!err) {
                    res.json({
                        message: 'Success',
                        data: item
                    });
                } else {
                    console.log(err);
                    res.json({
                        message: 'Error',
                        error: err
                    })
                }
            });
    },

    sellerLoginRequired: (req, res, next) => {
        if (req.seller) {
            next();
        } else {
            return res.status(401).json({
                message: 'Error',
                error: 'Unauthorized user!'
            });
        }
    }
}