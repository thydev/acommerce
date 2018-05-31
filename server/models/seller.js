const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const SellerSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
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
    hashPassword: {
        type: String,
        required: [false, '']
    },

}, {
    timestamps: true
});

SellerSchema.plugin(uniqueValidator, {
    message: 'The {PATH} {VALUE} already exists.'
});

SellerSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
};

module.exports = mongoose.model('Seller', SellerSchema);