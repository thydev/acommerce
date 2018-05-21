
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SellerSchema = new mongoose.Schema({
    _id : Schema.Types.ObjectId,
    firstname: {
        type: String, 
        required: [true, 'First Name is required'], 
        minlength: [3, 'First name must be greater than 3 characters']
    },
    lastname: {
        type: String, 
        required: [true, 'Last Name is required'], 
        minlength: [3, 'Last name must be greater than 3 characters']
    },
    email: {
        type: String, 
        unique: true, // Use 'mongoose-unique-validator'
        required: [true, 'Input your email'], 
        minlength: 2
    },
    password: {
        type: String, 
        required: [false, '']
    },

}, {timestamps: true});

module.exports = mongoose.model('Seller', SellerSchema);