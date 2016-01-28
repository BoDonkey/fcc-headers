'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    app = express(),
    reqDetails = require(__dirname+'/public/js/theDeets.js');
     
app.set('view engine', 'ejs');     
require('dotenv').load();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
  var header = req.headers;
  var finalDetails = reqDetails.theDeets(header);
  console.log(finalDetails);
    res.render('index', {finalDetails:finalDetails});
});


var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');

});


