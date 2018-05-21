
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderDetailSchema = new mongoose.Schema({
    _id : Schema.Types.ObjectId,
    product: {type: Schema.Types.ObjectId, ref: "Product"},
    qty: {
        type: Number, 
        required: [true, 'Input Quantity']
    },
    price: {
        type: Number, 
        default: 0
    },

}, {timestamps: true});

module.exports = mongoose.model('OrderDetail', OrderDetailSchema);