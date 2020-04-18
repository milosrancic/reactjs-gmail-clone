import React from 'react';
import Hoc from "../../Hoc";

const Starred = (props) => {
  return (
    <Hoc>
      <p>STARRED</p>
      {props.state.map((item) => 
        <li key={item.id} onClick={props.click}>{item.email}</li>
      )}
    </Hoc>
  )
}
export default Starred;