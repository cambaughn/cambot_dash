import React, { Component } from 'react';
import NewQuoteForm from './NewQuoteForm';
import Quotes from './Quotes';
import Navbar from './Navbar';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
    }
  }

  componentWillMount() {
    this.getAllQuotes();
  }

  getAllQuotes() {
    const url = 'http://localhost:1337/quotes';

    let headers = new Headers();

    let init = { method: 'GET',
                  headers: headers,
                  mode: 'cors',
                  cache: 'default' };

    fetch(url, init)
    .then(quotes => {
      return quotes.json();
    })
    .then(quotes => {
      this.setState({ quotes });
    })
  }

  render() {
    return (
      <div style={styles.page} >
        <Navbar />

        <div style={styles.bodyContainer} >
          <div style={styles.quoteWrapper} >
            <NewQuoteForm getAllQuotes={this.getAllQuotes.bind(this)} />
            <Quotes quotes={this.state.quotes} getAllQuotes={this.getAllQuotes.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  page: {
    marginTop: 0,
  },

  bodyContainer: {
    paddingTop: 20,

    width: '100%',
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'center',
  },

  quoteWrapper: {
    width: 1000,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',

    // border: '1px solid lightgreen',
  }
}

export default App;
