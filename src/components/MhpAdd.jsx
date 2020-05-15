import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

function MhpAdd(props) {
  let _name = null;
  let _occupation = null;
  let _insurance = null;
  let _address = null;
  let _accepting = null;
  let _email = null;
  let _phone = null;
  let _link = null;
  let _bio = null;
  let _imgref = null;
  let _latitude = null;
  let _longitude = null;

  function handleNewMhpSubmission(event) {
    event.preventDefault();
    props.onNewMhpCreation({name: _name.value, occupation: _occupation.value, insurance: _insurance.value, address: _address.value, accepting: _accepting.value, email: _email.value, phone: _phone.value, link: _link.value, bio: _bio.value, imgref: _imgref.value, latitude: _latitude.value, longitude: _longitude.value,});
    _name.value = '';
    _occupation.value = '';
    _insurance.value = '';
    _address.value = '';
    _accepting.value = '';
    _email.value = '';
    _phone.value = '';
    _link.value = '';
    _bio.value = '';
    _imgref.value = '';
    _latitude.value = '';
    _longitude.value = '';
  }
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
    <form onSubmit={handleNewMhpSubmission}>
    <input style={inputStyles}
    type='text'
    id='name'
    placeholder='Mental Health Practitioner name'
    ref={(input) => {_name = input;}}/>
    <input style={inputStyles}
    type='text'
    id='occupation'
    placeholder='Mental Health Practitioner occupation'
    ref={(input) => {_occupation = input;}}/>
    <input style={inputStyles}
    type='text'
    id='insurance'
    placeholder='Mental Health Practitioner insurance'
    ref={(input) => {_insurance = input;}}/>
    <input style={inputStyles}
    type='text'
    id='address'
    placeholder='Mental Health Practitioner address'
    ref={(input) => {_address = input;}}/>
    <input style={inputStyles}
    type='text'
    id='accepting'
    placeholder='Mental Health Practitioner accepting'
    ref={(input) => {_accepting = input;}}/>
    <input style={inputStyles}
    type='text'
    id='email'
    placeholder='Mental Health Practitioner email'
    ref={(input) => {_email = input;}}/>
    <input style={inputStyles}
    type='text'
    id='phone'
    placeholder='Mental Health Practitioner phone'
    ref={(input) => {_phone = input;}}/>
    <input style={inputStyles}
    type='text'
    id='link'
    placeholder='Mental Health Practitioner website'
    ref={(input) => {_link = input;}}/>
    <input style={inputStyles}
    type='text'
    id='bio'
    placeholder='Mental Health Practitioner bio'
    ref={(input) => {_bio = input;}}/>
    <input style={inputStyles}
    type='text'
    id='imgref'
    placeholder='Mental Health Practitioner imgref'
    ref={(input) => {_imgref = input;}}/>
    <input style={inputStyles}
    type='text'
    id='latitude'
    placeholder='Mental Health Practitioner latitude'
    ref={(input) => {_latitude = input;}}/>
    <input style={inputStyles}
    type='text'
    id='longitude'
    placeholder='Mental Health Practitioner longitude'
    ref={(input) => {_longitude = input;}}/>
    <Button style={buttonColors} type='submit'>Submit!</Button>
    </form>
    </div>
  );
}

MhpAdd.propTypes = {
  onNewMhpCreation: PropTypes.func
};

export default MhpAdd;
