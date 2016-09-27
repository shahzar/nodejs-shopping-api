const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profile: {
        name: String,
        gender: String,
        location: String,
        website: String,
        picture: String
    }
}, { timestamps: true });

userSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function(err, salt){
        if (err) { 
            return next(err); 
        }
        bcrypt.hash(user.password, salt, null, function(err, hash){
        if (err) {
             return next(err); 
        }
        user.password = hash;
        next();
        });
    });
    
});

module.exports = mongoose.model('User', userSchema);