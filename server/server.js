let app = require('express')();
let mongoose = require('mongoose');
let Quote = require('../schema/models/Quote');

var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use(bodyParser.json()); // for parsing application/json


// Get all quotes
app.get('/quotes', function (request, response) {
  Quote.find({}, (error, quote) => {
    if (error) {
      console.error(error);
    }

    response.send(quote);
  })
});



app.delete('/quotes', function (request, response) {
  // Delete quote
  Quote.remove({ _id: request.body.id }, error => {
    if (error) {
      console.error(error);
    } else {
      response.statusCode = 204;
      response.send('Deleted');
    }
  })
});


// Post new quote
app.post('/quotes', (request, response) => {

  let newQuote = new Quote({ author: request.body.author, text: request.body.text })
  newQuote.save(error => {
    if (error) {
      console.error(error);
      response.statusCode = 500;
      response.send(error);
    } else {
      response.statusCode = 201;
      response.send('Created');
    }
  })

});


app.put('/quotes', (request, response) => {

  console.log('receiving update')
  // Update quote
  Quote.update({ _id: request.body.id }, { author: request.body.author, text: request.body.text }, error => {
    if (error) {
      console.error(error);
    } else {
      // response.statusCode = 200;
      response.send('Updated');
    }
  })
})


let port = 1337;


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
});
