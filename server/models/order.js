
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OderDetailSchema = require('./orderDetail').schema;

const CartSchema = new mongoose.Schema({
    _id : Schema.Types.ObjectId,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    status: { 
        type: String // Pending, Completed
    },
    subtotal: { 
        type: Number // Maybe not needed, use the calculation
    },
    products: [OderDetailSchema],

}, {timestamps: true});

module.exports = mongoose.model('Order', OrderSchema);