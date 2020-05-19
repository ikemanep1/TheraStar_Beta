import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

class MhpAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    fetch('http://localhost:3000/mhps?', {
      method: 'POST',
      body: data,
    });
  }

  render() {
  const MhpFormStyles = {
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
    <div style={MhpFormStyles}>
    <form onSubmit={this.handleSubmit}>
    <input style={inputStyles}
    type='text'
    id='name'
    placeholder='Mental Health Practitioner name'/>
    <input style={inputStyles}
    type='text'
    id='occupation'
    placeholder='Mental Health Practitioner occupation'/>
    <input style={inputStyles}
    type='text'
    id='insurance'
    placeholder='Mental Health Practitioner insurance'/>
    <input style={inputStyles}
    type='text'
    id='address'
    placeholder='Mental Health Practitioner address'/>
    <input style={inputStyles}
    type='text'
    id='accepting'
    placeholder='Mental Health Practitioner accepting'/>
    <input style={inputStyles}
    type='text'
    id='email'
    placeholder='Mental Health Practitioner email'/>
    <input style={inputStyles}
    type='text'
    id='phone'
    placeholder='Mental Health Practitioner phone'/>
    <input style={inputStyles}
    type='text'
    id='link'
    placeholder='Mental Health Practitioner website'/>
    <input style={inputStyles}
    type='text'
    id='bio'
    placeholder='Mental Health Practitioner bio'/>
    <input style={inputStyles}
    type='text'
    id='imgref'
    placeholder='Mental Health Practitioner imgref'/>
    <input style={inputStyles}
    type='text'
    id='latitude'
    placeholder='Mental Health Practitioner latitude'/>
    <input style={inputStyles}
    type='text'
    id='longitude'
    placeholder='Mental Health Practitioner longitude'/>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    </form>
    </div>
  );
}
}

export default MhpAdd;
