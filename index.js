'use strict';

var express = require('express');
var cors = require('cors');

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  res.json({
    test: "latest-version",
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});
});

app.use(function(req, res) {
  res.status(404);
  res.type('txt').send('Not found');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});