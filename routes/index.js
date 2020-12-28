const adminRoutes = require('./admin');
const shopRoutes = require('./shop');
const express = require('express');
const router = express.Router();

router.use('/admin', adminRoutes.router);
router.use('/', shopRoutes);

module.exports = router;