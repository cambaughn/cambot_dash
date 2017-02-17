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
            return <QuoteListItem quote={quote.text} author={quote.author} />
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
