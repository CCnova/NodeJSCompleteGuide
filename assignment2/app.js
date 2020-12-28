const express = require('express');

const app = express();

app.use('/route1', (req, res, next) => {
  console.log('I am at the first middleware!');
  next();
});

app.use('/route1', (req, res, next) => {
  res.send('<h1>At middleware 2</h1>');
});

app.use('/users', (req, res, next) => {
  res.send('<h1>Users Page!</h1>');
});

app.use('/', (req, res, next) => {
  res.send('Default page!');
});


app.listen(3000);