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
          email: "Lorem ipsum dolor sit amet."
        },
        {
          id: 2,
          sender: "Josh One",
          email: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
          id: 3,
          sender: "Mike Mike",
          email: "lorem ipsum dolor something"
        }
      ],
      starred: [
        {
          id: 4,
          sender: "Lily Mike",
          email: "Lorem ipsum, dolor sit amet consectetur adipisicing."
        },
        {
          id: 5,
          sender: "Paul Awesome",
          email: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          id: 6,
          sender: "These Nuts",
          email: "Some awesome email 999"
        }
      ]
    }
  };

  addToInbox = item => {
    console.log("add to inbox")
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
    console.log("add to starred", item)
    // console.log(item);
  }

  render() {
    return (
      <div className="App">
        <Layout 
        state={this.state} 
        addToInbox={this.addToInbox}
        addToStarred={this.addToStarred} />
      </div>
    )
  }
}

export default App;
