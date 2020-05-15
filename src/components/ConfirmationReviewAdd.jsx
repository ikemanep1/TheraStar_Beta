import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

function ConfirmationReviewAdd(props){
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
    border: "3px solid #ffccff",
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
    <p>TheraStar is currently pre-alpha, and any constructive feedback is deeply appreciated! If you have any ideas about how TheraStar can best meet its mission statement, feel free to let me know! Please understand that responses are public, and any entries with harmful language will be removed.</p>
    <Button style={buttonColors} onClick={props.onAddConfirmation}>I understand.</Button>
    </div>
  );
}

ConfirmationReviewAdd.propTypes = {
  onAddConfirmation: PropTypes.func
};

export default ConfirmationReviewAdd;
