// require npm module
var express = require('express');
var bodyParser = require('body-parser'); // optional 1: use body parser
var app = express();


// middleware
app.use('/static', express.static(__dirname + "/../public/"));
app.use(bodyParser.json()); // optional 1: use body parser
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
}); // optional 2: allow CORS


var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Listen to the port', PORT);
});
