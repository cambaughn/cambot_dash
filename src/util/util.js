
let util = {};

util.deleteQuote = function(id, callback) {
  // Setup for request
  const url = 'http://localhost:1337/quotes';

  let quoteToDelete = { id: id };

  var headers = new Headers({
    'Content-Type': 'application/json',
  });

  let init = { method: 'DELETE',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(quoteToDelete)
              };

  // Actual request - handle errors and response here
  fetch(url, init)
  .then(response => {
    console.log(response);
    callback();
  })
  .catch(function(error) {
    console.error(error);
  });
}

util.updateQuote = function(id, author, text, callback) {
  // Setup for request
  const url = 'http://localhost:1337/quotes';

  let quoteToUpdate = { id: id,
                      author: author,
                      text: text };

  var headers = new Headers({
    'Content-Type': 'application/json',
  });

  let init = { method: 'PUT',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(quoteToUpdate)
              };

  // Actual request - handle errors and response here
  fetch(url, init)
  .then(response => {
    console.log(response);
    callback();
  })
  .catch(function(error) {
    console.error(error);
  });
}


util.combineStyles = function(style1, style2, condition) {
  return Object.assign({}, style1, condition ? style2 : {});
}



export default util;
