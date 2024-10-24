const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    provider: String,
    provider_id: String,
});

module.exports = mongoose.model('User', userSchema);
