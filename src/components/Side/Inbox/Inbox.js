import React from 'react';
import Hoc from "../../Hoc";

const styleLi = {
  borderBottom: "1px solid gray"
}

const Inbox = (props) => {
  return (
    <Hoc>
      <p>INBOX</p>
      {/* {props.inbox} */}
      {console.log("this is props in inbox", props.state)}
      {props.state.map((item) => 
      <li style={styleLi} key={item.id}>{item.email}</li>
        )}
    </Hoc>
  )
}

export default Inbox;