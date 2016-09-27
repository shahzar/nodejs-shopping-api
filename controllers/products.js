const Product = require('../models/product');

module.exports = function(req, res) {

    Product.find(function (err, result){
        return res.json({
            success: true,
            data: result
        });
    });
}