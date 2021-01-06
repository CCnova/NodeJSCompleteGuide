const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();

const {
  shopController
} = require('../controllers');

router.get('/', shopController.getIndexPage);

router.get('/products', shopController.getProductsPage);

router.get('/products/:productId', shopController.getProductPage);

router.get('/cart', shopController.getCartPage);

router.get('/orders', shopController.getOrdersPage);

router.get('/checkout', shopController.getCheckoutPage);


module.exports = router;