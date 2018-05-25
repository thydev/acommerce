const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const emailValidator = require('mongoose-unique-validator');
const CartSchema = require('./cart').schema;

const UserSchema = new mongoose.Schema({
    user_id:{
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Input your name'],
        minlength: 2
    },
    email: {
        type: String,
        required: [true, 'Email address is required'],
        unique: true,
        index: true,
    },
    cartProducts: [CartSchema],
}, { timestamps: true });

UserSchema.plugin(emailValidator, { message: 'The {PATH} {VALUE} already exists.' });

module.exports = mongoose.model('User', UserSchema);
