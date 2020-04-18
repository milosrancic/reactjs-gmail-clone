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
          id: 1,
          email: "Lorem ipsum, dolor sit amet consectetur adipisicing."
        },
        {
          id: 2,
          email: "Lorem ipsum dolor sit amet consectetur."
        },
        {
          id: 3,
          email: "Some awesome email 999"
        }
      ]
    }
  };

  onClick = () => {
    console.log("clicked")
  }

  render() {
    return (
      <div className="App">
        <Layout state={this.state} click={this.onClick} />
      </div>
    )
  }
}

export default App;
