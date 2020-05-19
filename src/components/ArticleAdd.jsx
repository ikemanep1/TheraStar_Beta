import React from 'react';
import {Button} from 'react-bootstrap';

class ArticleAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data);
    
    fetch('http://localhost:3000/articles?', {
      method: 'POST',
      body: data,
    });
  }

  render() {

  const articleFormStyles = {
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
    <div style={articleFormStyles}>
    <form onSubmit={this.handleSubmit}>
    <input style={inputStyles}
    type='text'
    id='name'
    placeholder='Article Name'/>
    <input style={inputStyles}
    type='text'
    id='link'
    placeholder='Article URL'/>
    <input style={inputStyles}
    type='text'
    id='description'
    placeholder='Article Description'/>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    </form>
    </div>
  );
}
}

export default ArticleAdd;
