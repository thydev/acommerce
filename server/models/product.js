
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SellerSchema = require('./seller').schema;
const ProductSchema = new mongoose.Schema({
    _id : Schema.Types.ObjectId,
    name: {
        type: String, 
        required: [true, 'Product Name is required']
    },
    description: {
        type: String, 
    },
    keywords: {
        // Contain: country, city, weather status, categories?
        // Probably add more schema (coutry, city, and category)
        type: String, 
    },
    seller: SellerSchema,
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);
