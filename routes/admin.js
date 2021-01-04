const express = require('express');
const path = require('path');
const router = express.Router();
// const rootDir = require('../util/path');

const {
  productsController
} = require('../controllers');

router.get('/add-product', productsController.getAddProductPage);

router.post('/add-product', productsController.postProduct); 

module.exports = {
  router,
};