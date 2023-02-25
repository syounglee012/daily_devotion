import React from "react";

const Footer = () => {
  const footerStyle = {
    color: "white",
    width: "100%",
    height: "3rem",
    backgroundColor: "black",
    fontSize: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
  };

  return (
    <div style={footerStyle}>
      Created with&nbsp;<span style={{ color: "red" }}>&#9829;</span>&nbsp;by Sam Lee 
    </div>
  );
};

export default Footer;
