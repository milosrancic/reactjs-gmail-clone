import React, { useState } from 'react';
import './App.scss';

import Layout from "../components/Layout";

const App = () => {
  
  const [inbox, setInbox] = useState([
    {
      tag: "inbox",
      id: 1,
      sender: "Jane Doe",
      email: "Lorem ipsum dorom sit amet.",
      checked: false,
      starred: true
    },
    {
      tag: "inbox",
      id: 2,
      sender: "Josh One",
      email: "Lorem ipsum dolor sit amet, consectetur",
      checked: false,
      starred: false 
    },
    {
      tag: "inbox",
      id: 3,
      sender: "Mike Mike",
      email: "random placeholder text",
      checked: false,
      starred: true
    }
  ]);

  const [spam, setSpam] = useState([
    {
      tag: "spam",
      id: 4,
      sender: "Lily Mike",
      email: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      checked: false,
      starred: false
    },
    {
      tag: "spam",
      id: 5,
      sender: "As Die",
      email: "some random text in email body",
      checked: false,
      starred: false
    }
  ]);

  const [trash, setTrash] = useState([
    {
      tag: "trash",
      id: 6,
      sender: "Mike Mikey",
      email: "this email is in trash",
      checked: false,
      starred: false
    }
  ]);

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
    // console.log("addToStarred", item)

    // console.log("add to starred", item)
    // console.log(item);
  }

  const addToSpam = item => {
    console.log("addtoSPAM: ", item)
  }

  

  const toggleChecked = item => {
    console.log("toggle checked", item)
    setInbox([item => !item.checked])
    // console.log(this.state.inbox[item])
    // console.log("original checked state",   
    // item.checked, !item.checked);
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
      />
      </div>
    )
  }
  



export default App;
