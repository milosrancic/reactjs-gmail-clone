import React, { useState } from 'react';
import uuid from 'react-uuid';
import './App.scss';

import Layout from "../components/Layout";

const App = () => {
  
  const [inbox, setInbox] = useState([
    {
      tag: "inbox",
      id: uuid(),
      sender: "Jane Doe",
      email: "Lorem ipsum dorom sit amet.",
      isChecked: false,
      starred: true
    },
    {
      tag: "inbox",
      id: uuid(),
      sender: "Josh One",
      email: "Lorem ipsum dolor sit amet, consectetur",
      isChecked: false,
      starred: false 
    },
    {
      tag: "inbox",
      id: uuid(),
      sender: "Mike Mike",
      email: "random placeholder text",
      isChecked: false,
      starred: true
    }
  ]);

  const [spam, setSpam] = useState([
    {
      tag: "spam",
      id: uuid(),
      sender: "Lily Mike",
      email: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      isChecked: false,
      starred: false
    },
    {
      tag: "spam",
      id: uuid(),
      sender: "As Die",
      email: "some random text in email body",
      isChecked: false,
      starred: false
    }
  ]);

  const [trash, setTrash] = useState([
    {
      tag: "trash",
      id: uuid(),
      sender: "Mike Mikey",
      email: "this email is in trash",
      isChecked: false,
      starred: false
    }
  ]);

  const [checked, setChecked] = useState(false);


  const addToTrash = item => {
    // console.log("add to trash", item);
    setTrash([item, ...trash ]);

    // CHECK THOSE IF STATEMENTS
    // if email is from inbox
    // if (item.tag === "inbox") {
      // remove that email from inbox
      setInbox([...inbox.filter(inbox => inbox !== item)])
    // }

    // if email is from spam
    // if (item.tag === "spam") {
      // remove that email from spam
      setSpam([...spam.filter(spam => spam !== item)])
    // }
  }
  
  const addToInbox = item => {
    // console.log("add to inbox", item)
    // this.setState({
    //   inbox: [
    //     {
    //       ...item
    //     },        
    //     ...this.state.inbox,
    //   ]
    // })
  }

  const addToStarred = (item) => {
    console.log("addToStarred", item)

    // console.log("add to starred", item)
    // console.log(item);
  }

  // const addToSpam = item => {
  //   console.log("addtoSPAM: ", item)
  // }

  

  const toggleChecked = item => {
    console.log("toggle checked", item)
    // setInbox([item => !item.checked])
    // console.log(this.state.inbox[item])
    // console.log("original checked state",   
    // item.checked, !item.checked);
    setChecked(checked => !checked);
  }

  const markAll = e => {
    console.log("mark all button");
    // let itemName = e.target.name;
    // let checked = e.target.checked;
  }

    return (
      <div className="App">
        <Layout 
          inbox={inbox}
          spam={spam}
          trash={trash}
          addToInbox={addToInbox}
          addToTrash={addToTrash}
          addToStarred={addToStarred}
          toggleChecked={toggleChecked}
          markAll={markAll}
      />
      </div>
    )
  }
  



export default App;
