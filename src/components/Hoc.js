import React from "react";

const style = {
  margin: "30px auto",
  backgroundColor: "orange",
  textAlign: "center"
}

const Hoc = (props) => <div style={style}>{props.children}</div>;


export default Hoc;