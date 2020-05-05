import React from "react";
import "./Item.scss"


const Item = props => {

  // wont work need to be ul > li
  {props.state.map((item) => {
    console.log(item.checked);
    let {id, sender, email, checked} ={item};
  })}
  console.log("passed props:", {props})
  // console.log('method', method)
  // if (props.title === "inbox") {
    // console.log("inbox")
    // console.log(props.addToStarred)
   
  return (
    <div className="Item">
    {console.log("passed props:", {props})}
      <p className="title">{props.title}</p>

      <button>mark all</button>
      {/* mark all mark as read/unread  */}
      <ul>
        {/* onClick={() => props.toggleChecked(item)} */}
        {props.state.map((item) =>
        <li className={`li`}  key={item.id}  >
            <input type="checkbox"  />
            {/* <i 
              className="far fa-star" 
              onClick={() => (console.log(item))}>
            </i> */}
            <span className="sender">{item.sender}</span> 
            <span className="email">{item.email}</span>
            <i className="fas fa-trash"></i>
        </li>
          )}
      </ul>
    </div>
  )
}

export default Item;