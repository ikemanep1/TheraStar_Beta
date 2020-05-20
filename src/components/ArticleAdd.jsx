import React from 'react';
import {Button} from 'react-bootstrap';

class ArticleAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleSubmit(event) {
    event.preventDefault();
    console.log(this._name.value, this._link.value, this._description.value);
    fetch(`http://localhost:3000/articles?name=${this._name.value}&link=${this._link.value}&description=${this._description.value}`, {
      method: 'POST',
    });
  }

  render() {
  let _name = null;
  let _link = null;
  let _description = null;
  
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
    placeholder='Article Name'
    ref={(input) => {this._name = input;}}/>
    <input style={inputStyles}
    type='text'
    id='link'
    placeholder='Article URL'
    ref={(input) => {this._link = input;}}/>
    <input style={inputStyles}
    type='text'
    id='description'
    placeholder='Article Description'
    ref={(input) => {this._description = input;}}/>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    </form>
    </div>
  );
}
}

export default ArticleAdd;
