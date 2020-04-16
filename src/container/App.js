import React, { Component } from 'react';
import './App.scss';

import Layout from "../components/Layout";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inbox: {
        id: 1,
        email: "Lorem ipsum dolor sit amet."
      }
      inbox: "inbox message",
      spam: "SPAM message",
      allMail: "allmail yes"
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Layout prop="passed prop from APP" state={this.state} /> */}
        <Layout prop="passed from API" />
      </div>
    )
  }
}

export default App;
