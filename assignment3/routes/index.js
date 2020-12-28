const usersRouter = require('./users');
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  res.status(201).sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.use('/users', usersRouter);

module.exports = router;