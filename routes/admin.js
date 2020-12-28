const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {
  const pageTitle = 'Add Product';
  res.render('add-product', { pageTitle, path: '/admin/add-product' });
});

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title })
  res.redirect('/');
});

module.exports = {
  router,
  products,
};