import React from "react";
import Item from "../Item";


const Trash = props => {
  return (
    <>
    <Item 
        title="inbox"
        state={props.state}
        toggleChecked={props.toggleChecked}
       />
    </>
  )
}
export default Trash;