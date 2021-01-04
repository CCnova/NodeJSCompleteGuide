const adminRoutes = require('./admin');
const shopRoutes = require('./shop');
const express = require('express');
const router = express.Router();
const {
  errorController,
} = require('../controllers');

router.use('/admin', adminRoutes.router);
router.use('/', shopRoutes);
router.use(errorController.getNotFoundPage);

module.exports = router;