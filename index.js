const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: true}));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/top-level.html'))
})

app.get('/home', (req, res) => {
  res.send('hello');
})

app.post('/set-cookie-and-redirect', (req, res) => {
  const { redirectTo, cookieName, cookieValue } = req.body;
  res.cookie(cookieName, cookieValue);
  res.redirect(redirectTo || '/home');
})

app.listen(1234)