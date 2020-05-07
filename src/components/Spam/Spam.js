import React from "react";
import Item from "../Item";

const Spam = (props) => {
  return (
    <>
      <Item 
        title="spam"
        state={props.state}
        addToInbox={props.addToInbox}
        toggleChecked={props.toggleChecked}
        addToTrash={props.addToTrash}
       />
  </>
  )
}
export default Spam;