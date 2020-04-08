import React, { Component } from 'react';
import './App.scss';
import SideNav from "../components/SideNav/SideNav";
import TopNav from "../components/TopNav/TopNav";

import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideNav />
        <TopNav />
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
