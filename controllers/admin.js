const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
  const pageTitle = 'Add Product';
  res.render('admin/add-product', { pageTitle, path: '/admin/add-product' });
};

exports.postProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;

  const product = new Product(
    title,
    imageUrl,
    description,
    price,
  );

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