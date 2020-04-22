import React from "react";

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
  textAlign: "center",
  textTransform: "uppercase"
}

const Item = props => {
  console.log(props)
  return (
    <div>
    <p style={title}>{props.title}</p>
    <ul>
      {props.state.map((item) => 
      <li key={item.id} style={styleLi} >
          <input style={styleCheckbox} type="checkbox"  />
          <i className="far fa-star" style={star}></i>
           {item.email}
      </li>
        )}
      </ul>
      </div>
  )
}

export default Item;