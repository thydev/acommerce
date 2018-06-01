const mongoose = require('mongoose'),
    Product = mongoose.model('Product');

module.exports = {
    search: (req, res) => {
        Product.find({
                $text: {
                    $search: req.body.searchString
                }
            }, {
                score: {
                    $meta: 'textScore'
                }
            })
            .sort({
                score: {
                    $meta: 'textScore'
                }
            })
            // .skip(20)
            // .limit(10)
            .exec((err, items) => {
                if (!err) {
                    res.json({
                        message: "Success",
                        data: items
                    });
                } else {
                    res.json({
                        message: "Error",
                        error: err
                    })
                }
            });
    },

    getAll: (req, res) => {
        Product.find({}, (err, items) => {
            if (!err) {
                res.json({
                    message: "Success",
                    data: items
                });
            } else {
                res.json({
                    message: "Error",
                    error: err
                })
            }
        }).sort({
            name: 1
        });
    },

    getById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        Product.find({
                _id: new ObjectId(req.params.id)
            })
            .exec((err, item) => {
                if (!err) {
                    res.json({
                        message: "Success",
                        data: item
                    });
                } else {
                    res.json({
                        message: "Error",
                        error: err
                    })
                }
            });
    },

    create: (req, res) => {
        let item = new Product(req.body);
        item._id = new mongoose.Types.ObjectId();
        item.seller = req.params.sellerid;
        item.save(err => {
            if (!err) {
                res.json({
                    message: "Success",
                    data: item
                })
            } else {
                res.json({
                    message: "Error",
                    error: err
                })
            }
        });
    },

    updateById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        const update = req.body;
        console.log(update);
        const opts = {
            runValidators: true,
            context: 'query'
        };
        Product.update({
            _id: new ObjectId(req.params.id)
        }, update, opts, function (err, item) {
            if (!err) {
                res.json({
                    message: "Success",
                    data: item
                });
            } else {
                res.json({
                    message: "Error",
                    error: err
                })
            }
        });
    },

    removeById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        Product.remove({
                _id: new ObjectId(req.params.id)
            })
            .exec((err, item) => {
                if (!err) {
                    res.json({
                        message: "Success",
                        data: item
                    });
                } else {
                    res.json({
                        message: "Error",
                        error: err
                    })
                }
            });
    },

    createReview: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId;
        Product.findOne({
                _id: new ObjectId(req.params.id)
            })
            .exec((err, item) => {
                if (!err) {
                    // item.reviews = []; // clear the review
                    item.reviews.push(req.body.review);
                    // item.reviews = [req.body.review];
                    item.save((err2, item2) => {
                        if (err2) {
                            res.json({
                                message: 'Error',
                                error: err2
                            });
                        } else {
                            res.json({
                                message: "Success",
                                data: item2
                            });
                        }
                    });
                } else {
                    res.json({
                        message: "Error",
                        error: err
                    })
                }
            });
    },

}