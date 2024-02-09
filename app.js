const express = require('express');
// create app
const app = express();
// register view engine
app.set('view engine', 'ejs');

// start listening
app.listen(3000);

// middleware process
app.use((req, res, next) => {
  console.log('new request made: ');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

// listen request
app.get('/', function (req, res) {
  // res.send('Hello World');
  //res.sendFile('./views/index.ejs',{ root:__dirname});
  res.render('index');
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.ejs',{ root:__dirname});
});

app.get('/login', (req, res) => {
  res.sendFile('./views/login.ejs',{ root:__dirname});
});

app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html',{ root:__dirname});
});