import React, { Component } from 'react';

import QuoteListItem from './QuoteListItem';

class Quotes extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        {
          this.props.quotes.map(quote => {
            return <QuoteListItem text={quote.text} author={quote.author} id={quote._id}
              getAllQuotes={this.props.getAllQuotes} key={quote._id} />
          })
        }
        <QuoteListItem />
      </div>
    );
  }
}


const styles = {
  container: {
    width: 550,
    // border: '1px solid lightblue',
  }

}

export default Quotes;
