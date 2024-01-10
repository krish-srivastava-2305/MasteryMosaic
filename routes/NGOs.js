const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/MasteryMosaicDB")

const ngoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    contact: {
        phone: String,
        email: String
    },
    mission: String,
    logo: String,
    image: String 
    
});

module.exports = mongoose.model('NGO', ngoSchema);




