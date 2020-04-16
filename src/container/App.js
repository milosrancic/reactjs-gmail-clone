import React, { Component } from 'react';
import './App.scss';

import Layout from "../components/Layout";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     inbox: "inbox message",
  //     spam: "SPAM message",
  //     allMail: "allmail yes"
  //   }
  // }

  // onPassedProp = (prop) => {
  //   console.log("APP component console log prop", prop)
  // }

  render() {
    return (
      <div className="App">
        {/* <Layout prop="passed prop from APP" state={this.state} /> */}
        <Layout />
      </div>
    )
  }
}

export default App;
