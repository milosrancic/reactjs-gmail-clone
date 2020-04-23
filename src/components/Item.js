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

  const method = props.addToStarred;
  console.log('method', method)
  if (props.title === "inbox") {
    console.log("inbox")
    console.log(props.addToStarred)
  } 
  if (props.title === "starred") {
    console.log('starred')
    console.log(props.addToInbox)
  }

  return (
    <div style={styleDiv}>
      {console.log({props})}
    <p style={title}>{props.title}</p>
    <ul>
      {props.state.map((item) => 
      <li key={item.id} style={styleLi} >
          <input style={styleCheckbox} type="checkbox"  />
          <i 
            className="far fa-star" 
            style={star} 
            onClick={() => props.addToStarred(item)}></i>
          <span style={sender}>{item.sender}</span> <span style={email}>{item.email}</span>
      </li>
        )}
      </ul>
    </div>
  )
}

export default Item;