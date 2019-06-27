/* eslint-disable no-undef */

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    posts: [
        {
            title: String,
            content: String,
            date: String
        }
    ]
});

UserSchema.statics.authUser = function(username, password, callback) {
    User.findOne({ username: username }, function(err, user) {
        if (err) {
            return callback(err);
        } else if (!user) {
            let userErr = new Error('No user found');
            userErr.status = 401;
            return callback(userErr);
        }

        if (password === user.password) {
            return callback(null, user);
        }
        return callback();
    });
};

const User = mongoose.model('User', UserSchema);
module.exports = User;
