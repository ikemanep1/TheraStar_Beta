import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ArticleAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(event) {
    event.preventDefault();
    console.log(this._name.value, this._link.value, this._description.value);
    fetch(`https://shrouded-stream-63622.herokuapp.com?name=${this._name.value}&link=${this._link.value}&description=${this._description.value}`, {
      method: 'POST',
    });
  }

  render() {
  
    const ArticleFormStyles = {
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
    const ArticleFormTypeStyles = {
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
  return (
    <div style={ArticleFormStyles}>
    <form onSubmit={this.handleSubmit}>
      <div style={ArticleFormTypeStyles}>
      <p>What is the name and URL of the article?</p>
    <input style={inputStyles}
    type='text'
    id='name'
    placeholder='Article Name'
    ref={(input) => {this._name = input;}}/>
    <input style={inputStyles}
    type='text'
    id='link'
    placeholder='Article URL'
    ref={(input) => {this._link = input;}}/>
    </div>
    <div style={ArticleFormTypeStyles}>
      <p>Please give a description of the article, and what points it covers.</p>
    <input style={inputStyles}
    type='text'
    id='description'
    placeholder='Article Description'
    ref={(input) => {this._description = input;}}/>
    </div>
    <Link to="/reviewlist"><Button style={buttonColors} type='submit'>Resources</Button></Link>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    </form>
    </div>
  );
}
}

export default ArticleAdd;
