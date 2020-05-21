import React from "react";
import PropTypes from "prop-types";

function Review(props){
  const reviewSingular = {
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '40px',
    marginBottom: '20px',
    textAlign: 'center',
    backgroundColor: '#7a387a',
    padding: '20px',
    borderRadius: '100px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Arial',
    color: '#fdfdff'
  }

  const reviewSingularPortions = {
    margin: '10px',
    textAlign: 'center',
    backgroundColor: '#c785c7',
    padding: '20px',
    borderRadius: '70px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Arial',
    color: '#fdfdff',
  }

  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center'
  }
  
  return (
    <div style={reviewSingular}>
      <div style={reviewSingularPortions}>
    <h5>{props.name}</h5>
    </div>
    <div style={reviewSingularPortions}>
    <p>"{props.content}"</p>
    </div>
    </div>
  );
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};


export default Review;
