import React, { Component } from 'react';
import './App.css';
import SideNav from "../components/SideNav/SideNav";
import TopNav from "../components/TopNav/TopNav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <TopNav />
      </div>
    )
  }
}

export default App;
