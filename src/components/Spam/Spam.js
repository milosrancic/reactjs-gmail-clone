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
        addToStarred={props.addToStarred}
        mark={props.mark}
       />
  </>
  )
}
export default Spam;