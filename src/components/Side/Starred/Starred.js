import React from 'react';
import Hoc from "../../Hoc";

const Starred = (props) => {
  return (
    <Hoc>
      {/* {console.log("starred:", props)} */}
      <p>STARRED</p>
      {props.state.map((item) => 
        <li key={item.id} onClick={() => props.addToInbox(item)}>{item.email}</li>
      )}
    </Hoc>
  )
}
export default Starred;