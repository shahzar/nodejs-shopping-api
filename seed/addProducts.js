const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cart');

const product = new Product({
    name: "Product1",
    description: "This is a sample product",
    image: "http://link.to/image.jpg",
    price: 20,
    seller: "SellerName",
    availableQuantity: 500
});

product.save(function (err, result) {
    mongoose.disconnect();
});
