import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

function ConfirmationArticleAdd(props){
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
    <p>Articles listed on TheraStar are for people who are in need of help. Poorly written articles, or articles that provide false information could be harmful to viewers. Please ensure that your contribution is helpful, truthful, and promotional of safety and self care.
    If you are adding a Article to the site, please make sure that it is appropriate and promotional of safety, self care, and inclusion. Articles with harmful language will be removed.</p>
    <Button style={buttonColors} onClick={props.onAddConfirmation}>I understand.</Button>
    </div>
  );
}

ConfirmationArticleAdd.propTypes = {
  onAddConfirmation: PropTypes.func
};

export default ConfirmationArticleAdd;