const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/frame.html'))
})

app.listen(1234)