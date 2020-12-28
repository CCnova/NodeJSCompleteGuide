// -------- Using Express -----------
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');

const app = express();

// const expressHbs = require('express-handlebars');
// app.engine('hbs', expressHbs());
// app.set('view engine', 'hbs');
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
  const pageTitle = 'Page Not Found'
  res.render('not-found', { pageTitle });
});

app.listen(3000);



// -------- Using Vanilla NodeJS -----------
// const http = require('http');

// const server = http.createServer((req, res) => {
//   const url = req.url;

//   console.log(url);

//   res.end('Hello World!');
// });

// server.listen(3000);