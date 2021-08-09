const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/top-level.html'))
})

app.listen(1234)