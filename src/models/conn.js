const mongoose = require('mongoose');
const validator = require('validator');

const WebSchema = new mongoose.Schema({
    name: {
        type: String,
        uppercase: true,
        trim: true,
        required: true,
        minlength: [2, 'name not avilable'],
        maxlength: [30, 'name is not avilable']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value))
            {
                throw new Error("email is not valid")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        min: [10, "numebr is not avilable"]
        // max: [20, 'number is not avilable']  
    },
    massage: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = new mongoose.model("User", WebSchema);

module.exports = User;