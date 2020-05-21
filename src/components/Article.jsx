import React from "react";
import PropTypes from "prop-types";
import {Button} from 'react-bootstrap';

function Article(props){
  const articleSingular = {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: '#7a387a',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Arial',
    color: '#fdfdff',
    alignItems: 'center'
  }
  const articleSingularPortions = {
    margin: '20px',
    marginTop: '15px',
    textAlign: 'center',
    backgroundColor: '#c785c7',
    padding: '20px',
    borderRadius: '70px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Arial',
    color: '#fdfdff',
  }
  const buttonColors = {
    margin: '10px',
    border: "3px solid #ffccff",
    color: "white",
    backgroundColor: "#c06cc6",
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px',
    alignItems: 'center',
  }
  return (
    <div style={articleSingular}>
      <div style={articleSingularPortions}>
    <h5>{props.name}</h5>
    </div>
    <div style={articleSingularPortions}>
    <ul>
    <p>{props.description}</p>
    </ul>
      </div>
    <a href={props.link} ><Button style={buttonColors}>Article</Button></a>
    </div>
  );
}

Article.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Article;
