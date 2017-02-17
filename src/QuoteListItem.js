import React, { Component } from 'react';

class QuoteListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <p>{this.props.quote}</p>
        <p>- {this.props.author}</p>

      </div>
    );
  }
}


const styles = {
  container: {
    width: 550,
    borderBottom: '1px solid #ecf0f1',

    paddingTop: 10,
    paddingBottom: 10,
  }

}

export default QuoteListItem;
