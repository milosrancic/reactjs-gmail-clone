import React from 'react';
import Item from "../../Item";

const Starred = (props) => {
  return (
    <>
      <Item title="Starred" state={props.state}  />
    </>
  )
}
export default Starred;