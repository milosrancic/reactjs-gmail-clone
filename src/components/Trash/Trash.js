import React from "react";
import Item from "../Item";


const Trash = props => {
  return (
    <>
    <Item 
        title="trash"
        state={props.state}
        toggleChecked={props.toggleChecked}
        markAll={props.markAll}
       />
    </>
  )
}
export default Trash;