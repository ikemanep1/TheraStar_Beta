import React from "react";
import PropTypes from "prop-types";
import {Button} from 'react-bootstrap';

function CoronaArticle(props){
  const coronaArticleSingular = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#7a387a',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Arial',
    color: '#fdfdff'
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
    <div style={coronaArticleSingular}>
    <p>Article: {props.name}</p>
    <ul>
    <a href={props.link} ><Button style={buttonColors}>Read it here!</Button></a>
    <p>About this article: {props.description}</p>
    </ul>
    </div>
  );
}

CoronaArticle.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default CoronaArticle;
