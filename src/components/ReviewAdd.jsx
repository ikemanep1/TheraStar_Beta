import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
    const ReviewFormStyles = {
      marginLeft: '30%',
      marginRight: '30%',
      marginTop: '20px',
      textAlign: 'center',
      backgroundColor: '#7a387a',
      padding: '20px',
      borderRadius: '100px',
      border: '3px solid #ddb0dd',
      fontFamily: 'Arial',
      color: '#fdfdff',
    }
    const ReviewFormTypeStyles = {
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '15px',
      marginBottom: '5px',
      textAlign: 'center',
      backgroundColor: '#c785c7',
      padding: '20px',
      borderRadius: '70px',
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
    margin: '10px',
    textAlign: 'center'
  }
  const inputStylesName = {
    margin: '10px',
    width: '20vw',
    textAlign: 'center'
  }
  return (
    <div style={ReviewFormStyles}>
    <form onSubmit={this.handleSubmit}>
    <div style={ReviewFormTypeStyles}>
      <p>What is your name?</p>
    <input style={inputStylesName}
    type='text'
    id='name'
    placeholder="(it's okay to say 'anonymous')"
    ref={(input) => {this._name = input;}}/>
    </div>
    <div style={ReviewFormTypeStyles}>
      <p>Let us know what you think!</p>
    <input style={inputStyles}
    type='text'
    id='content'
    placeholder='Review Content'
    ref={(input) => {this._content = input;}}/>
    </div>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    <Link to="/reviewlist"><Button style={buttonColors} type='submit'>Reviews</Button></Link>
    </form>
    </div>
  );
}
}
export default ReviewAdd;
