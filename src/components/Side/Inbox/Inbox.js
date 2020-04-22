import React from 'react';
import Hoc from "../../Hoc";

const styleCheckbox = {
  background: "orange",
  transform: "scale(1.3)",
  verticalAlign:"center"
}

const styleLi = {
  padding: "20px",
}
const star = {
  marginLeft: "5px",
  marginRight: "20px",
}

const title = {
  textAlign: "center"
}


const Inbox = (props) => {
  return (
    <>
    {/* <Hoc> */}
  {console.log("inbox:", props)}
      <p style={title}>INBOX</p>
      {props.state.map((item) => 
      <li key={item.id} style={styleLi} >
          <input style={styleCheckbox} type="checkbox"  />
          <i className="far fa-star" style={star}></i>
           {item.email}
        
      </li>
        )}
    {/* </Hoc> */}
  </>
  )
}
// onClick={() => props.click(item.id)}
export default Inbox;