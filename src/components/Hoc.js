import React from "react";

const styleDiv = {
  margin: "50px",
  backgroundColor: "orange",
  textAlign: "center"
}

const styleUl = {
  listStyleType: "none",
  margin: "0",
  padding: "0"
}

const Hoc = (props) => <div style={styleDiv}><ul style={styleUl}>{props.children}</ul></div>;


export default Hoc;