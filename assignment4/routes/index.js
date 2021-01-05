const express = require('express');
const router = express.Router();
const usersRouter = require('./users');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/users', usersRouter);

module.exports = router;