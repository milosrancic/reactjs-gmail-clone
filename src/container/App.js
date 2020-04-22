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
          email: "Lorem ipsum dolor sit amet."
        },
        {
          id: 2,
          email: "Lorem ipsum dolor sit amet, consectetur"
        },
        {
          id: 3,
          email: "lorem ipsum dolor something"
        }
      ],
      starred: [
        {
          id: 4,
          email: "Lorem ipsum, dolor sit amet consectetur adipisicing."
        },
        {
          id: 5,
          email: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          id: 6,
          email: "Some awesome email 999"
        }
      ]
    }
  };

  onClick = (id) => {
    console.log("clicked", id)
  }

  addToInbox = (item) => {
    this.setState({
      inbox: [
        {
          ...item
        },        
        ...this.state.inbox,
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Layout 
        state={this.state} 
        click={this.onClick} 
        addToInbox={this.addToInbox} />
      </div>
    )
  }
}

export default App;
