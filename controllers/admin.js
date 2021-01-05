const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
  const pageTitle = 'Add Product';
  res.render('admin/add-product', { pageTitle, path: '/admin/add-product' });
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProductsPage = (req, res, next) => {
  const pageTitle = 'Admin Produtos';

  Product.fetchAll((products) => {
    res.render('admin/products', {
      products,
      pageTitle,
      path: '/admin/products',
    });
  });
};