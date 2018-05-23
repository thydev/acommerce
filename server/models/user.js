
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const CartSchema = require('./cart').schema;

const UserSchema = new mongoose.Schema({
    // _id: Schema.Types.ObjectId,
    // firstname: {
    //     type: String, 
    //     required: [true, 'First Name is required'], 
    //     minlength: [3, 'First name must be greater than 3 characters']
    // },
    // lastname: {
    //     type: String, 
    //     required: [true, 'Last Name is required'], 
    //     minlength: [3, 'Last name must be greater than 3 characters']
    // },
    user_id:{
        type: String,
        // required: [true],
    },
    nickname: {
        type: String,
        required: [true, 'Last Name is required'],
        minlength: [3, 'Last name must be greater than 3 characters']
    },
    name: {
        type: String,
        // unique: true, // Use 'mongoose-unique-validator'
        required: [true, 'Input your name'],
        minlength: 2
    },
    // password: {
    //     //Without hash for now. WILL Add it later
    //     type: String,
    //     required: [false, '']
    // },
    cartProducts: [CartSchema],
}, { timestamps: true });

// UserSchema.plugin(uniqueValidator, { message: 'The {PATH} {VALUE} already exists.' });

module.exports = mongoose.model('User', UserSchema);
