import React from "react";
import "./Item.scss"

const Item = props => {

  console.log("ITEM props:", {props});
  // console.log('method', method)
  // if (props.title === "inbox") {
    // console.log("inbox")
    // console.log(props.addToStarred)

    return (
    <div className="Item">
    {console.log("Item passed props:", {props})}
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
              onClick={
                props.addToInbox ? 
                () => props.addToInbox(item) : 
                () => false
                }
            >{item.sender}</span> 
            <span className="email">{item.email}</span>
            <i className="fas fa-trash" onClick={() => props.addToTrash(item)}></i>
        </li>
          )}
      </ul>
    </div>
  )
}

export default Item;

// () => props.addToInbox(item)