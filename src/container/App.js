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
          email: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ea enim dolores a ex deleniti?"
        }
      ],
      spam: [
        {
          id: 1,
          email: "Lorem ipsum, dolor sit amet consectetur adipisicing."
        },
        {
          id: 2,
          email: "Lorem ipsum dolor sit amet consectetur."
        }
      ]
    }
  };

  render() {
    return (
      <div className="App">
        {/* <Layout prop="passed prop from APP" state={this.state} /> */}
        <Layout state={this.state.inbox} />
      </div>
    )
  }
}

export default App;
