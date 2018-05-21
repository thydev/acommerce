const mongoose = require('mongoose'),
        User = mongoose.model('User');

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

    getById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        User.find({_id: new ObjectId(req.params.id)})
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
        const opts = { runValidators: true };
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

}