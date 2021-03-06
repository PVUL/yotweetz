require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var tweetList = require ('./tweets');

var app = express();

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res){
  res.render('index');
});

app.post('/get_tweets', function(req, res) {
  var screen_name = req.body.handle;
  var tweets = tweetList(res, screen_name);
});

var port = process.env.PORT || 3000;
app.listen(port);
