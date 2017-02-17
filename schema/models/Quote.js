let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let quoteSchema = mongoose.Schema({
    author: String,
    text: String
});

let Quote = mongoose.model('Quote', quoteSchema);

let elon = new Quote({ author: 'Elon Musk', text: 'Just read the instructions' });

console.log(elon.text);

module.exports = Quote;
