const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/27017/MasteryMosaicDB")
const donationSchema = new mongoose.Schema({
    item: String,
    quantity: Number,
    desc : String,
    donor : mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Donation', donationSchema);

