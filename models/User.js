const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Schema } = mongoose; // exactly the same as line2
const userSchema = new Schema({
    googleId: String,
    name: String

});

mongoose.model('users', userSchema);