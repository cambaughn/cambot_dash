let app = require('express')();
let mongoose = require('mongoose');
let Quote = require('../schema/models/Quote');

var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // for parsing application/json

app.get('/quotes', function (request, response) {
  Quote.find({}, (error, quote) => {
    if (error) {
      console.error(error);
    }
 
    response.send(quote);
  })
});

app.post('/new_quote', (request, response) => {

  console.log('Here\'s the new quote => ', request.body);

  let newQuote = new Quote({ author: request.body.author, text: request.body.text })
  newQuote.save(error => {
    if (error) {
      console.error(error);
      response.statusCode = 500;

      response.send(error);
    } else {
      // console.log('Saved!');
      response.statusCode = 201;
      response.send('Created');
    }
  })

});


let port = 1337;


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
});
