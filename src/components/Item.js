import React from "react";
import "./Item.scss"

const Item = props => {

  console.log("ITEM props:", {props});
    return (
    <div className="Item">
      <p className="title">{props.title}</p>

      <button>mark all</button>
      {/* mark all mark as read/unread  */}
      <ul>
        {props.state.map((item) =>
        <li className={`li`}  key={item.id}  >
            <input type="checkbox"  />
            <i className="far fa-star" 
            onClick={props.addToStarred ? 
            () => props.addToStarred(item) :
            () => false}>
            </i>
            <span className="sender"
              onClick={
                props.addToInbox ? 
                () => props.addToInbox(item) : 
                () => false
                }
            >{item.sender}</span> 
            <span className="email">{item.email}</span>
            <i className="fas fa-trash" onClick={props.addToTrash ? () => props.addToTrash(item) : () => false }></i>
        </li>
          )}
      </ul>
    </div>
  )
}

export default Item;

// () => props.addToInbox(item)