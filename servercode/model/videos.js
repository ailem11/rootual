const mongoose = require('mongoose');
const videoSchema = mongoose.Schema({

}, {strict: false});

const  Videos = module.exports = mongoose.model('videos', videoSchema);
