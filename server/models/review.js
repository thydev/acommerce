
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReviewSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Name is required']
    },
    rating: {
        type: Number,
        default: 0
    },
    description: {
        type: String, 
    },
}, {timestamps: true});

module.exports = mongoose.model('Review', ReviewSchema);
