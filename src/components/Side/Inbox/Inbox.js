import React from 'react';
import Hoc from "../../Hoc";

const Inbox = (props) => {
  return (
    <Hoc>
  {/* {console.log("inbox:", props)} */}
      <p>INBOX</p>
      {props.state.map((item) => 
      <li key={item.id} >{item.email}</li>
        )}
    </Hoc>
  )
}
// onClick={() => props.click(item.id)}
export default Inbox;