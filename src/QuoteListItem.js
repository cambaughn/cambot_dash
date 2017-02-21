import React, { Component } from 'react';
import util from './util/util';

class QuoteListItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text,
      author: this.props.author,
      hovered: false,
    }
  }

  render() {

    let containerStyle = util.combineStyles(styles.container, styles.containerHover, this.state.hover);
    let deleteStyle = util.combineStyles(styles.deleteButton, styles.deleteHover, this.state.hover);

    return (
      <div style={containerStyle} id={this.props.id}
        onMouseOver={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })} >

        <input type='text' value={this.state.text}
          onChange={event => {
            this.setState({ text: event.target.value });
          }}
          onBlur={util.updateQuote.bind(this, this.props.id, this.state.author, this.state.text, this.props.getAllQuotes)}
          style={styles.input}
          />
        <br />

        <input type='text' value={this.state.author}
          onChange={event => {
            this.setState({ author: event.target.value });
          }}
          onBlur={util.updateQuote.bind(this, this.props.id, this.state.author, this.state.text, this.props.getAllQuotes)}
          style={styles.input}
        />


        <i className="fa fa-times" aria-hidden="true"
          style={deleteStyle}
          onClick={util.deleteQuote.bind(this, this.props.id, this.props.getAllQuotes)}
          ></i>
      </div>
    );
  }
}


const styles = {
  container: {
    width: 550,
    borderBottom: '1px solid #ecf0f1',

    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 20,

    position: 'relative',
  },

  containerHover: {
    backgroundColor: '#FAFAFA',
  },

  deleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#bdc3c7',
    visibility: 'hidden',
  },

  deleteHover: {
    visibility: 'visible',
    cursor: 'pointer',
  },

  input: {
    outline: 'none',
    border: 'none',
    backgroundColor: 'transparent',
  },

}

export default QuoteListItem;
