const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
  const pageTitle = 'Add Product';
  res.render('add-product', { pageTitle, path: '/admin/add-product' });
};

exports.postProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProductsPage = async (req, res, next) => {
  const pageTitle = 'Produtos';
  Product.fetchAll((products) => {
    res.render('shop', {
      products,
      pageTitle,
      path: '/',
    });
  });
  
};