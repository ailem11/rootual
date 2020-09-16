const mongoose = require('mongoose');
const userSchema = mongoose.Schema({}, {strict: false});

const Users = module.exports = mongoose.model('users', userSchema);
