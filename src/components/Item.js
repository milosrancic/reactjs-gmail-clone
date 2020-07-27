import React from "react";
import "./Item.scss"

const Item = props => {           
  return (
    <div className="Item">
      <p className="title">{props.title}</p>

      {/* {
        props.state.length > 0 
        ?  <button>mark all</button>
        :   `There are no messages left in ${props.title}` 
      } */}
      
      
      {/* move this styling into coresponding css file (item.scss), don't leave it like this! */}
     <div style={{marginTop: "3em"}}> 
       {
          props.state.length < 1 
          ?  <p style={{textAlign: "center", marginTop: "4em", fontSize:"18px"}}>There are no messages left in <span style={{fontWeight:"bold"}}> {props.title} </span></p>
          :  <button>mark all</button> 
        }
      </div>
      
      {/* mark all mark as read/unread  */}
      {/* <button>mark all</button> */}
      <ul>
        {props.state.map(item =>
        <li className="li"  key={item.id}>
            <input type="checkbox" 
            onChange={() => props.toggleChecked(item)} 
            checked={item.checked}  />
            <i className=
              {item.starred ? `fas fa-star starred` : `fas fa-star`}
                onClick={
                  props.addToStarred ? () => props.addToStarred(item) : undefined
                }>
            </i>

            <span className="sender"
              onClick={
                props.addToInbox ? 
                () => props.addToInbox(item) : 
                () => false
              }
            >{item.sender}</span> 

            <span className="email">{item.email}</span>
            <i className="fas fa-trash" 
              onClick={
                props.addToTrash ? 
                () => props.addToTrash(item) :
                () => false 
              }>
            </i>
        </li>
          )}
      </ul>
    </div>
  )
}

export default Item;

{/* {props.addToStarred ?
                <i className="fas fa-star" 
                 onClick={() => props.addToStarred(item)}></i> :
                 undefined
            } */}




// initial ternary operator
{/* <i className="far fa-star" 
  onClick={props.addToStarred ? 
  () => props.addToStarred(item) :
  () => false}>
</i> */}