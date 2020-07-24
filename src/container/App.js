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
      checked: true,
      starred: true
    }
  ]);

  const [spam, setSpam] = useState([
    {
      tag: "spam",
      id: 4,
      sender: "Lily Mike",
      email: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      checked: true,
      starred: false
    },
    {
      tag: "spam",
      id: 5,
      sender: "As Die",
      email: "some random text in email body",
      checked: false,
      starred: true
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

  const addToTrash = (item, index) => {
    console.log("add to trash", item);
    setTrash([item, ...trash ]);

    // item.filter({})

    // if email is from inbox
    if (item.tag === "inbox") {
      // remove that email from inbox
      // setInbox([...inbox, inbox.filter(index !== item)])
      setInbox([...inbox.filter(item.id !== index)])
      // setInbox([...inbox.splice(index, 1)])
    }

    // if email is from spam
    if (item.tag === "spam") {
      // remove that email from spam
      // setSpam([])
    }
  }
  
  const addToInbox = item => {
    console.log("add to inbox", item)
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

  const addToSpam = item => {

  }

  

  const toggleChecked = item => {
    console.log("toggle checked", item)
    // console.log(this.state.inbox[item])
    // console.log("original checked state",   
    // item.checked, !item.checked);

    // this.setState( prevState => ({
    //  checked: !prevState.checked
    // }))

    // this.setState({ checked: !this.state.checked  })

    // this.setState(prevState => {
    //   const {message} = prevState;
    //   const i = message.indexOf(itemId);
    //   if (i === -1) {
    //     console.log('something')
    //   } else {
    //     console.log(' else')
    //   }
    //   return {message};
    // })

      // console.log("after checked state:", this.state[item])

      // console.log("item state:", item.checked)
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
