const mongoose = require('mongoose');
const User = mongoose.model('User');
const Cart = mongoose.model('Cart');
const Order = mongoose.model('Order');

module.exports = {

    getAll : (req, res) => {
        Order.find({}, (err, items) => {
            if (!err) {
                res.json({message: "Success", data: items});
            } else {
                console.log(err);
                res.json({message: "Error", error: err})
            }
        });
    },

    getById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Order.find({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },
    
    create: (req, res) => {
        let item = new Order(req.body);
        item._id = new mongoose.Types.ObjectId();
        // item.name = req.body.name;
        item.save( err => {
            if (!err) {
                res.json({message: "Success", data: item})
            } else {
                console.log(item.errors);
                res.json({message: "Error", error: err})
            }
        });
    }, 

    updateById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        const update = req.body;
        console.log(update);
        const opts = { runValidators: true, context: 'query' };
        Order.update({_id: new ObjectId(req.params.id)}, update, opts, function(err, item) {
            if (!err) {
                res.json({message: "Success", data: item});
            } else {
                console.log(err);
                res.json({message: "Error", error: err})
            }
        });
    },

    removeById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Order.remove({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },

    createCart: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Order.findOne({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    // if (item.cartProducts) {
                    //     item.cartProducts = [];
                    // }
                    item.cartProducts = req.body.products;
                    item.save((err2, item2) => {
                        if (err2) {
                            res.json({message: 'Error', error: err2});
                        } else {
                            res.json({message: "Success", data: item2});
                        }
                    });
                } else {
                    res.json({message: "Error", error: err})
                }
            });
    },
}