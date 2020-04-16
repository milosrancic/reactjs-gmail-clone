import React from 'react';
import Hoc from "../../Hoc";

const Inbox = (props) => {
  return (
    <Hoc>
      <p>INBOX</p>
      {/* {props.inbox} */}
      {console.log("this is props in inbox", props.state)}
      <li>email one</li>
      <li>email two</li>
      <li>email three</li>
      <li>email four</li>
      <li>email five</li>
    </Hoc>
  )
}

export default Inbox;