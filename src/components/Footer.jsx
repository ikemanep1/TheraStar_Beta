import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer(){
  const footerStyle = {
    backgroundColor: "#7a387a",
    padding: "5px",
    textDecoration: 'none',
    textAlign: 'center',
    fontFamily: 'fantasy',
    color: '#cc6699',
    fontSize: "20px",
    marginTop: '28%',
    marginBottom: '0%',
    height: '20%',
    position: 'relative',
    borderTopRightRadius: '100px',
    borderTopLeftRadius: '100px',
    borderTop: '3px solid #ddb0dd',
  }
  return (
    <div style={footerStyle}>
    <a href={`https://facebook.com`} ><FaFacebookSquare color="#ff80ff" style={{marginLeft:'20px'}} /></a>
    <a href={`https://twitter.com`} ><FaTwitter color="#ff80ff" style={{marginLeft:'20px'}} /></a>
    <a href={`https://instagram.com`} ><FaInstagram color="#ff80ff" style={{marginLeft:'20px'}} /></a>
    </div>
  );
}

export default Footer;
