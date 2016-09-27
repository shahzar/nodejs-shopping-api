var express = require('express');

var indexController = require('./controllers/index');
var productsController = require('./controllers/products');

var router = express.Router();

router.get('/', indexController);
router.get('/products', productsController);

module.exports = router;