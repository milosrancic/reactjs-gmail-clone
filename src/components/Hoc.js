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

// ITERATION IN UL
// {props.children[2].map(item =>
//   console.log("HOC:", item.props.children))
// }
// console.log("HOC props:", props.children[2])
const Hoc = (props) => {
  return (
    <div style={styleDiv}>
      <ul style={styleUl}>
        {props.children}
      </ul>
    </div>
  )
};


export default Hoc;