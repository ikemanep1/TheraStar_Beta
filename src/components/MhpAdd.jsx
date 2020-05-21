import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class MhpAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:3000/mhps?name=${this._name.value}&occupation=${this._occupation.value}&insurance=${this._insurance.value}&address=${this._address.value}&accepting=${this._accepting.value}&email=${this._email.value}&phone=${this._phone.value}&link=${this._link.value}&bio=${this._bio.value}&imgref=${this._imgref.value}&latitude=${this._latitude.value}&longitude=${this._longitude.value}`, {
      method: 'POST',
    });
  }

  render() {
  const MhpFormStyles = {
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
  const MhpFormTypeStyles = {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '20px',
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
    width: '15vw',
    borderRadius: '5px',
    textAlign: 'center'
  }
  const noBullets = {
    listStyleType: 'none'
  }
  return (
    <div style={MhpFormStyles}>
      <h3>Mental Health Practitioner additions form:</h3>
    <form onSubmit={this.handleSubmit}>
      <ul style={noBullets}>
      <div style={MhpFormTypeStyles}>
    <li><input style={inputStyles}
    type='text'
    id='name'
    placeholder="name"
    ref={(input) => {this._name = input;}}/></li>
    <li><input style={inputStyles}
    type='text'
    id='occupation'
    placeholder="occupation"
    ref={(input) => {this._occupation = input;}}/></li>
    </div>
    <div style={MhpFormTypeStyles}>
    <p>Please list any and all forms of insurance that you currently accept:</p>
    <li><input style={inputStyles}
    type='text'
    id='insurance'
    placeholder="accepted insurances"    
    ref={(input) => {this._insurance = input;}}/></li>
    </div>
    <div style={MhpFormTypeStyles}>
    <p>What is your office address? (leave 'remote' if you're working from home)</p>
    <li><input style={inputStyles}
    type='text'
    id='address'
    placeholder="office address"
    ref={(input) => {this._address = input;}}/></li>
    </div>
    <div style={MhpFormTypeStyles}>
    <p>Are you currently accepting patients?</p>
    <li><input style={inputStyles}
    type='text'
    id='accepting'
    placeholder="status"
    ref={(input) => {this._accepting = input;}}/></li>
    </div>
    <div style={MhpFormTypeStyles}>
    <p>Please provide your contact information, so that clients can reach you.</p>
    <li><input style={inputStyles}
    type='text'
    id='email'
    placeholder="email"
    ref={(input) => {this._email = input;}}/></li>
    <li><input style={inputStyles}
    type='text'
    id='phone'
    placeholder="phone number"
    ref={(input) => {this._phone = input;}}/></li>
    <p>Do you have a website that you would like to provide?</p>
    <li><input style={inputStyles}
    type='text'
    id='link'
    placeholder="website link"
    ref={(input) => {this._link = input;}}/></li>
    </div>
    <div style={MhpFormTypeStyles}>
    <p>Please give a quick (sentence or two) description of who you are and the work that you do.</p>
    <li><input style={inputStyles}
    type='textArea'
    id='bio'
    placeholder="description"
    ref={(input) => {this._bio = input;}}/></li>
    </div>
    <div style={MhpFormTypeStyles}>
    <p>Please provide an image url of yourself.</p>
    <li><input style={inputStyles}
    type='text'
    id='imgref'
    placeholder="image reference"
    ref={(input) => {this._imgref = input;}}/></li>
    <p>What are the latitude and longitude coordinates of your office? This is so that the office can show up on the map.</p>
    <li><input style={inputStyles}
    type='text'
    id='latitude'
    placeholder="latitude"
    ref={(input) => {this._latitude = input;}}/></li>
    <li><input style={inputStyles}
    type='text'
    id='longitude'
    placeholder="longitudes"
    ref={(input) => {this._longitude = input;}}/></li>
    </div>
    </ul>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    <Link to="/mhplist"><Button style={buttonColors} type='submit'>Therapists</Button></Link>
    </form>
    </div>
  );
}
}

export default MhpAdd;
