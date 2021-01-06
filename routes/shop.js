const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

const {
  shopController
} = require('../controllers');

router.get('/', shopController.getIndexPage);

router.get('/products', shopController.getProductsPage);

router.get('/cart', shopController.getCartPage);

router.get('/orders', shopController.getOrdersPage);

router.get('/checkout', shopController.getCheckoutPage);


module.exports = router;