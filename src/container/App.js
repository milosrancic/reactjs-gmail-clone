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
          checked: true
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
          email: "lorem ipsum dolor something",
          checked: false
        }
      ],
      spam: [
        {
          id: 4,
          sender: "Lily Mike",
          email: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
          checked: true
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
    console.log("toggleChecked:", item)
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
