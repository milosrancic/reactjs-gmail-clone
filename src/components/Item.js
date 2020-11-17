import React from "react";
import "./Item.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Item = (props) => {
  return (
    <div className="Item">
      <p className="title">{props.title}</p>

      {/* {
        props.state.length > 0 
        ?  <button>mark all</button>
        :   `There are no messages left in ${props.title}` 
      } */}

      {/* move this styling into coresponding css file (item.scss), don't leave it like this! */}
      <div style={{ marginTop: "3em" }}>
        {props.state.length < 1 ? (
          <p
            style={{ textAlign: "center", marginTop: "4em", fontSize: "18px" }}
          >
            There are no messages left in{" "}
            <span style={{ fontWeight: "bold" }}> {props.title} </span>
          </p>
        ) : (
          <button onClick={() => props.markAll()}>mark all</button>
        )}
      </div>
      {/* onChange={() => props.toggleChecked(item)} checked={item.checked}  */}
      <Container className="">
        <ul>
          {props.state.map((item) => (
            <li className="li" key={item.id}>
              <Row className="">
                <Col xs={2} className="">
                  <input type="checkbox" />

                  {/* if it's trash return nothing, if it's not trash return star */}
                  {props.title === "trash" ? undefined : (
                    <i
                      className={
                        item.starred ? `fas fa-star starred` : `fas fa-star`
                      }
                      onClick={
                        props.addToStarred
                          ? () => props.addToStarred(item)
                          : undefined
                      }
                    ></i>
                  )}
                </Col>

                <Col xs={2}>
                  <span
                    className="sender"
                    onClick={
                      props.addToInbox
                        ? () => props.addToInbox(item)
                        : () => false
                    }
                  >
                    {item.sender}
                  </span>
                </Col>

                <Col xs={7}>
                  <span className="email text-center">{item.email}</span>
                </Col>

                {/* if it's "trash" folder, don't show trash can */}
                {props.title === "trash" ? undefined : (
                  <Col xs={1}>
                    <i
                      className="fas fa-trash float-right"
                      onClick={
                        props.addToTrash
                          ? () => props.addToTrash(item)
                          : () => false
                      }
                    ></i>
                  </Col>
                )}
              </Row>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Item;

{
  /* {props.addToStarred ?
                <i className="fas fa-star" 
                 onClick={() => props.addToStarred(item)}></i> :
                 undefined
            } */
}

// initial ternary operator
{
  /* <i className="far fa-star" 
  onClick={props.addToStarred ? 
  () => props.addToStarred(item) :
  () => false}>
</i> */
}
