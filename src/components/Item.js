import React from "react";
import "./Item.scss"

// figure out passing functions to item 
const Item = props => {

  console.log("ITEM props:", {props})
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
        {props.state.map((item) =>
        <li className={`li`}  key={item.id}  >
            <input type="checkbox"  />
            <i 
              className="far fa-star" 
              onClick={() => (console.log(item))}>
            </i>
            <span className="sender"
              onClick={() => props.addToInbox(item)}
            >{item.sender}</span> 
            <span className="email">{item.email}</span>
            <i className="fas fa-trash"></i>
        </li>
          )}
      </ul>
    </div>
  )
}

export default Item;