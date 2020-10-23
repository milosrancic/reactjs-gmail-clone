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
          :  <button onClick={() => props.mark()}>mark all</button> 
        }
      </div>
      {/* onChange={() => props.toggleChecked(item)} checked={item.checked}  */}
      <ul>
        {props.state.map(item =>
        <li className="li"  key={item.id}>
            <input type="checkbox" />

          {/* if it's trash return nothing, if it's not trash return star */}
          {props.title === "trash" ? undefined : 
            <i className=
              {item.starred ? `fas fa-star starred` : `fas fa-star`}
                onClick={
                  props.addToStarred ? () => props.addToStarred(item) : undefined
                }>
            </i>
          }

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