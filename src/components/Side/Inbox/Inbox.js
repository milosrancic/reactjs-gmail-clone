import React from 'react';
import Hoc from "../../Hoc";

const Inbox = (props) => {
  return (
    <Hoc>
      <p>INBOX</p>
      {console.log("this is props in inbox", props.state)}
      {props.state.map((item) => 
      <li key={item.id}>{item.email}</li>
        )}
    </Hoc>
  )
}

export default Inbox;