import React from "react";
import PropTypes from "prop-types";
import {Button} from 'react-bootstrap';

function Mhp(props){
  const mhpSingular = {
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
  const mhpSingularPortions = {
    marginRight: '10%',
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
    marginLeft: '10%',
    marginRight: '10%',
    border: "3px solid #ffccff",
    color: "white",
    backgroundColor: "#c06cc6",
    padding: "10px",
    textDecoration: 'none',
    fontSize: '20px',
    borderRadius: '20px'
  }
  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center'
  }
  const nameStyles = {
    margin: '40%',
    marginTop: '15px',
    marginBottom: '5px',
    textAlign: 'center',
    backgroundColor: '#c785c7',
    padding: '20px',
    borderRadius: '70px',
    border: '3px solid #ddb0dd',
    fontFamily: 'Arial',
    color: '#fdfdff',
    margin: 'auto',
    width: '20vw'
  }
  
  return (
    <div style={mhpSingular}>
    <h5 style={nameStyles}>{props.name}</h5>
    <ul style={itemGrid}>


    <div style={mhpSingularPortions}>
      <h6>Field:</h6>
      <p>{props.occupation}</p>
      </div>

      <div style={mhpSingularPortions}>
      <h6>Office address:</h6>
      <p>{props.address}</p>
      </div>


      <div style={mhpSingularPortions}>
      <h6>Contact info:</h6>
      <p>{props.email}</p>
      <p>{props.phone}</p>
      </div>

      <div style={mhpSingularPortions}>
        <h6>Accepted forms of insurance:</h6>
      <p>{props.insurance}</p>
      </div>
      
      <div style={mhpSingularPortions}>
        <h6>Status: </h6>
      <p>{props.accepting}</p>
      </div>

      <div style={mhpSingularPortions}>
        <h6>About: </h6>
      <p>{props.bio}</p>
      <a href={props.link} ><Button style={buttonColors}>Website</Button></a>
      </div>
    </ul>
  </div>
   );
}

Mhp.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  insurance: PropTypes.string.isRequired,
  accepting: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  // imgref: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};


export default Mhp;
