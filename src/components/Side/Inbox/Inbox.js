import React from 'react';
import Layout from '../../Layout';
import Hoc from "../../Hoc";

const Inbox = (props) => {
  return (
    <Hoc>
      <p>INBOX</p>
      {props.test}
      {console.log("this is props in inbox", props)}
      <li>email one</li>
      <li>email two</li>
      <li>email three</li>
      <li>email four</li>
      <li>email five</li>
    </Hoc>
  )
}

export default Inbox;