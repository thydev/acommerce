const mongoose = require('mongoose');
const User = mongoose.model('User');
const Cart = mongoose.model('Cart');

module.exports = {

    getAll : (req, res) => {
        User.find({}, (err, items) => {
            if (!err) {
                res.json({message: "Success", data: items});
            } else {
                console.log(err);
                res.json({message: "Error", error: err})
            }
        }).sort({ name: 1 });
    },

    getByUserId: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        User.find({user_id: req.params.user_id})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },
    getByEmail: (req, res) => {
        console.log("HITTTTT Controller")
        var useremail = req.params.email;
        console.log(useremail);
        User.findOne({email:  useremail})
            .exec((err, item)=>{
                if (!err) {
                    console.log(item);
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },
    // getById: (req, res) => {
    //     const ObjectId = mongoose.Types.ObjectId; 
    //     User.find({_id: new ObjectId(req.params.id)})
    //         .exec((err, item)=>{
    //             if (!err) {
    //                 res.json({message: "Success", data: item});
    //             } else {
    //                 console.log(err);
    //                 res.json({message: "Error", error: err})
    //             }
    //         });
    // },
    
    create: (req, res) => {
        let item = new User(req.body);
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
        User.update({_id: new ObjectId(req.params.id)}, update, opts, function(err, item) {
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
        User.remove({_id: new ObjectId(req.params.id)})
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
        User.findOne({_id: new ObjectId(req.params.id)})
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