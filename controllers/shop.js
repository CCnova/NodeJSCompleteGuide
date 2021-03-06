const Product = require('../models/product');

exports.getIndexPage = (req, res, next) => {
  const pageTitle = 'Shop';

  Product.fetchAll((products) => {
    res.render('shop/index', {
      products,
      pageTitle,
      path: '/'
    });
  });
};

exports.getProductsPage = (req, res, next) => {
  const pageTitle = 'Produtos';

  Product.fetchAll((products) => {
    res.render('shop/product-list', {
      products,
      pageTitle,
      path: '/products',
    });
  });
};

exports.getProductPage = (req, res, next) => {
  
  const productId = req.params.productId;

  Product.findById(productId, (product) => {
    const pageTitle = product.title;
    const path = '/products';

    res.render('shop/product-detail', {
      pageTitle,
      product,
      path,
    });
  });
};


exports.getCartPage = (req, res, next) => {
  const pageTitle = 'Carrinho';

  res.render('shop/cart', {
    path: '/cart',
    pageTitle,
  });
};

exports.getOrdersPage = (req, res, next) => {
  const pageTitle = 'Pedidos';

  res.render('shop/orders', {
    path: '/orders',
    pageTitle,
  });
};

exports.getCheckoutPage = (req, res, next) => {
  const pageTitle = 'Checkout';

  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle,
  });
};