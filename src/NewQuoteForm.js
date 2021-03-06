import React, { Component } from 'react';

class NewQuoteForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    }
  }


  // Fetch request to POST new quote to server
  sendNewQuote(event) {
    event.preventDefault();

    // Setup for request
    const url = 'http://localhost:1337/quotes';

    let newQuote = { author: this.state.author,
      text: this.state.text }

    var headers = new Headers({
    	'Content-Type': 'application/json',
    });

    let init = { method: 'POST',
                  mode: 'cors',
                  headers: headers,
                  body: JSON.stringify(newQuote)
                };

    if (newQuote.author && newQuote.text) {
      // Actual request - handle errors and response here
      fetch(url, init)
      .then(response => {
        console.log(response);
        this.props.getAllQuotes();

        this.setState({ author: '', text: '' });
      })
      .catch(function(error) {
        console.error(error);
      });
    }
  }

  render() {
    return (
      <form style={styles.form}>

        <div className="form-group">
          <label htmlFor="quote">Quote</label>
          <textarea className="form-control" id="quote"
            rows="4" value={this.state.text}
            placeholder='Quote'
            onChange={event => {
              this.setState({ text: event.target.value });
            }}
            style={styles.textArea}>
          </textarea>
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author"
            placeholder="Author Name" value={this.state.author}
            onChange={event => {
              this.setState({ author: event.target.value });
            }}
            />
        </div>

        <button type="submit" className="btn btn-primary" onClick={this.sendNewQuote.bind(this)}>Submit</button>
      </form>
    );
  }
}


const styles = {
  form: {
    width: 350,
  },

  textArea: {
    maxWidth: 350,
  },
}

export default NewQuoteForm;
