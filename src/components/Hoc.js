import React from "react";

// placholder styling
const styleDiv = {
  margin: "50px auto",
  backgroundColor: "lightgray",
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
      {/* {console.log("HOC:", props.children[1])} */}
      {/* {console.log(props.children)}  */}
      <ul>
        {props.children}
        {props.children.map(item => {
          console.log(item)
        })}
      </ul>
    </div>
  )
};


export default Hoc;