const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: String,
    price: {
        type: Number,
        require: true
    },
    seller: String, 
    availableQuantity: Number
});

module.exports = mongoose.model('Product', productSchema);