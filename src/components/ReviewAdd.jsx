import React from 'react';
import {Button} from 'react-bootstrap';

class ReviewAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this._name.value, this._content.value);
    fetch(`http://localhost:3000/reviews?name=${this._name.value}&content=${this._content.value}`, {
      method: 'POST',
    });
  }

  render() {
  const reviewFormStyles = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#7a387a',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Arial',
    color: '#fdfdff',
  }
  const buttonColors = {
    marginLeft: '10px',
    border: "3px solid #ffccff",
    color: "white",
    backgroundColor: "#c06cc6",
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px'
  }
  const inputStyles = {
    margin: '10px'
  }
  return (
    <div style={reviewFormStyles}>
    <form onSubmit={this.handleSubmit}>
    <input style={inputStyles}
    type='text'
    id='name'
    placeholder='Your Name'
    ref={(input) => {this._name = input;}}/>
    <input style={inputStyles}
    type='text'
    id='content'
    placeholder='Review Content'
    ref={(input) => {this._content = input;}}/>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    </form>
    </div>
  );
}
}
export default ReviewAdd;
