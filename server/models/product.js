const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SellerSchema = require('./seller').schema;
const ReviewSchema = require('./review').schema;

const ProductSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'Product name is required']
    },
    imgUrlHead: {
        type: String
    },
    imgUrl: {
        type: String
    },
    description: {
        type: String,
    },
    keywords: {
        // Contain: country, city, weather status, categories?
        // Probably add more schema (coutry, city, and category)
        type: String,
    },
    sellprice: {
        type: Number,
        default: 0
    },
    availableQuantity: {
        type: Number,
        default: 0
    },
    // seller: SellerSchema,
    seller: {
        type: Schema.Types.ObjectId,
        ref: "Seller"
    },
    // Ratings and reviews
    reviews: [ReviewSchema]
}, {
    timestamps: true
});

// Create an index to support text search on
ProductSchema.index({
    keywords: 'text',
    name: 'text'
});

module.exports = mongoose.model('Product', ProductSchema);