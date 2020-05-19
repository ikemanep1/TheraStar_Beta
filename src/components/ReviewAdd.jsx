import React from 'react';
import {Button} from 'react-bootstrap';

class ReviewAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:3000/reviews?', {
      method: 'POST',
      body: data,
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
    placeholder='Your Name'/>
    <input style={inputStyles}
    type='text'
    id='content'
    placeholder='Review Content'/>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    </form>
    </div>
  );
}
}
export default ReviewAdd;
