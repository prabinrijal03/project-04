const mongoose = require('mongoose');
const db = require('../config/db');

const userSchema = new mongoose.Schema({
    userId: String,
    userTime: String,
    userDate: String,
    title: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const userModel = db.model('user', userSchema);

module.exports = userModel;