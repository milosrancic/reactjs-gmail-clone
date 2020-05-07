import React from 'react';
import Item from "../Item";

const Inbox = (props) => {
  return (
    <>
      <Item 
        title="inbox"
        state={props.state}
        addToInbox={props.addToInbox}
        toggleChecked={props.toggleChecked}
       />
  </>
  )
}
// onClick={() => props.click(item.id)}
export default Inbox;