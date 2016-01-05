var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
var router = express.Router();
router.route('/')
  .get(function(req,res) {
    res.status(200).json({
      message: 'Welcome to the API'
    });
  });
var bookshelf = require('./bookshelf');
app.use('/api',router);
app.listen(port, function() {
  console.log('runs on',port);
});
