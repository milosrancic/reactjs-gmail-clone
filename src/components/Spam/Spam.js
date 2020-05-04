import React from "react";
import Item from "../Item";

const Spam = (props) => {
  return (
    <>
      <Item 
        title="spam"
        state={props.state}
       />
  </>
  )
}
export default Spam;