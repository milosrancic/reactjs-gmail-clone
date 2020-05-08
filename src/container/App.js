import React, { Component } from 'react';
import './App.scss';

import Layout from "../components/Layout";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      inbox: [
        {
          id: 1,
          sender: "Jane Doe",
          email: "Lorem ipsum dolor sit amet.",
          checked: false
        },
        {
          id: 2,
          sender: "Josh One",
          email: "Lorem ipsum dolor sit amet, consectetur",
          checked: false
        },
        {
          id: 3,
          sender: "Mike Mike",
          email: "random placeholder text",
          checked: true
        }
      ],
      spam: [
        {
          id: 4,
          sender: "Lily Mike",
          email: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
          checked: true
        },
        {
          id: 5,
          sender: "As Die",
          email: "some random text in email body",
          checked: false
        }
      ],
      trash : [
        {
          id: 6,
          sender: "Mike Mikey",
          email: "this email is in trash",
          checked: false
        }
      ]
    }
  };

  addToInbox = item => {
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

  addToStarred = (item) => {
    console.log("addToStarred", item)
    // console.log("add to starred", item)
    // console.log(item);
  }

  addToSpam = item => {

  }

  addToTrash = item => {
    console.log("trash", item)
  }

  toggleChecked = item => {
    console.log(this.state.inbox[item])
    console.log("original checked state",   
    item.checked, !item.checked);

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

  render() {
    return (
      <div className="App">
        <Layout 
        state={this.state} 
        addToInbox={this.addToInbox}
        addToTrash={this.addToTrash}
        addToStarred={this.addToStarred}
        toggleChecked={this.toggleChecked}
      />
      </div>
    )
  }
}

export default App;
