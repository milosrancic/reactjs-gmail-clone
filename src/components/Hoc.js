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

const Hoc = (props) => {
  // console.log("HOC props:", props)
  return (
    <div style={styleDiv}>
      <ul style={styleUl}>{props.children}</ul>
    </div>
  )
};


export default Hoc;