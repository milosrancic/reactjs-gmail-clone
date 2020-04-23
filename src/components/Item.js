import React from "react";

const styleDiv = {
  width: "70%",
  background: "lightgray",
  margin: "3rem auto"
}

const styleCheckbox = {
  // background: "orange",
  // transform: "scale(1.3)",
  verticalAlign:"top"
}

const styleLi = {
  padding: "20px",
}
const star = {
  marginLeft: "5px",
  marginRight: "20px",
}

const title = {
  textAlign: "center",
  textTransform: "uppercase"
}

const email = {
  paddingLeft: "30px",

}

const sender = {
  // paddingRight: "3rem",
  // width: "100px"
}

const Item = props => {
  console.log(props)
  return (
    <div style={styleDiv}>
    <p style={title}>{props.title}</p>
    <ul>
      {props.state.map((item) => 
      <li key={item.id} style={styleLi} >
          <input style={styleCheckbox} type="checkbox"  />
          <i className="far fa-star" style={star} onClick={()=>{console.log('star is clicked')}}></i>
          <span style={sender}>{item.sender}</span> <span style={email}>{item.email}</span>
      </li>
        )}
      </ul>
    </div>
  )
}

export default Item;