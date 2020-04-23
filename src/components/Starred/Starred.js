import React from 'react';
import Item from "../Item";

const Starred = (props) => {
  return (
    <>
      <Item 
        title="starred" 
        state={props.state}
        addToInbox={props.addToInbox}
      />
    </>
  )
}
export default Starred;