import React, { useState } from 'react';
import './App.scss';

import Layout from "../components/Layout";

const App = () => {
  
  const [inbox, setInbox] = useState([
    {
      id: 1,
      sender: "Jane Doe",
      email: "Lorem ipsum dorom sit amet.",
      checked: false,
      starred: true
    },
    {
      id: 2,
      sender: "Josh One",
      email: "Lorem ipsum dolor sit amet, consectetur",
      checked: false,
      starred: false 
    },
    {
      id: 3,
      sender: "Mike Mike",
      email: "random placeholder text",
      checked: true,
      starred: true
    }
  ]);

  const [spam, setSpam] = useState([
    {
      id: 4,
      sender: "Lily Mike",
      email: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      checked: true,
      starred: false
    },
    {
      id: 5,
      sender: "As Die",
      email: "some random text in email body",
      checked: false,
      starred: true
    }
  ]);

  const [trash, setTrash] = useState([
    {
      id: 6,
      sender: "Mike Mikey",
      email: "this email is in trash",
      checked: false,
      starred: false
    }
  ]);

    return (
      <div className="App">
        <Layout 
          inbox={inbox}
          spam={spam}
          trash={trash}

      />
      </div>
    )
  }
  
//   addToInbox={this.addToInbox}
//   addToTrash={this.addToTrash}
//   addToStarred={this.addToStarred}
//  toggleChecked={this.toggleChecked} 

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

  const addToTrash = item => {
    console.log("trash", item)
  }

  const toggleChecked = item => {
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


export default App;
