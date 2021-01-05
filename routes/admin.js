const express = require('express');
const path = require('path');
const router = express.Router();
// const rootDir = require('../util/path');

const {
  adminController
} = require('../controllers');

router.get('/add-product', adminController.getAddProductPage);

router.get('/products', adminController.getProductsPage);

router.post('/add-product', adminController.postProduct); 

module.exports = {
  router,
};