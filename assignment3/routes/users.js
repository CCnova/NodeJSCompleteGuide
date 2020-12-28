const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  res.status(201).sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

module.exports = router;