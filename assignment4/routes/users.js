const express = require('express');
const router = express.Router();

const usuarios = [];

router.get('/', (req, res, next) => {
  res.render('users', { usuarios });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  const newUsuario = req.body.userName;

  usuarios.push(newUsuario);

  res.redirect('/users');
});

module.exports = router;