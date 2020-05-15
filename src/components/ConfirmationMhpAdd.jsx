import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

function ConfirmationMhpAdd(props){
  const confirm = {
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
    border: "3px solid #fff285",
    color: "white",
    backgroundColor: "#c06cc6",
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px'
  }
  return (
    <div style={confirm}>
    <h1>Thank you for your interest in contributing!</h1>
    <p>Mental health practitioners listed here are licensed professionals who are trained to help people. Please ensure that the person you are adding meets the criteria. Entries that do not meet the criteria will be removed.</p>
    <Button style={buttonColors} onClick={props.onAddConfirmation}>I understand.</Button>
    </div>
  );
}

ConfirmationMhpAdd.propTypes = {
  onAddConfirmation: PropTypes.func
};

export default ConfirmationMhpAdd;