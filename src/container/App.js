import React, { Component } from 'react';
import './App.scss';

import Layout from "../components/Layout";

import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
        {/* <Link to="/sidenav">side</Link>
        <Link to="/topnav">top</Link>

        <Switch>
          <Route path="/sidenav">
            <SideNav />
          </Route>
          <Route path="/topnav">
            <TopNav />
          </Route>
        </Switch> */}
      </div>
    )
  }
}

export default App;
