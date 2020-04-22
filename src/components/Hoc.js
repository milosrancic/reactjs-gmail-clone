import React from "react";

// placholder styling
const styleDiv = {
  margin: "50px auto",
  backgroundColor: "lightgray",
  textAlign: "center",
  width: "60rem"
}

// ITERATION IN UL
{/* {console.log("HOC:", props.children)} */}
{/* {props.children[2].map(item =>
      console.log("HOC:", item.props.children))
} */}
const Hoc = (props) => {
  return (
    <div style={styleDiv}>
      <ul>
        {props.children}
      </ul>
    </div>
  )
};


export default Hoc;