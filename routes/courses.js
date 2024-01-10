const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/MasteryMosaicDB')

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    duration: Number,
    link : String
});

module.exports = mongoose.model('Course', courseSchema);


