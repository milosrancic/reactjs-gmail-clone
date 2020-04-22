import React from 'react';
import Item from "../../Item";

const Inbox = (props) => {
  return (
    <>
        <Item 
          title="inbox"
          state={props.state}
        />
  </>
  )
}
// onClick={() => props.click(item.id)}
export default Inbox;