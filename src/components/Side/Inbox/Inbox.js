import React from 'react';
import Hoc from "../../Hoc";

const Inbox = (props) => {
  return (
    <Hoc>
      <p>INBOX</p>
      {props.state.map((item) => 
      <li key={item.id} onClick={props.click}>{item.email}</li>
        )}
    </Hoc>
  )
}

export default Inbox;