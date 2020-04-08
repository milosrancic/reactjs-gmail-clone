import React from "react";
import "./TopNav.scss";
import { Switch, Route, Link } from "react-router-dom";

import Social from "./Social/Social";
import Promotions from "./Promotions/Promotions";
import Primary from "./Primary/Primary";

const TopNav = () => {
  return (
    <div className="TopNav">
      <Link to="/topnav/primary">Primary</Link>
      <Link to="/topnav/social">Social</Link>
      <Link to="/topnav/promotions">Promotions</Link>

      <Switch>
        <Route path="/topnav/primary">
          <Primary />

        </Route>
        <Route path="/topnav/social">
          <Social />
        </Route>
        <Route path="/topnav/promotions">
          <Promotions />
        </Route>
      </Switch>
    </div>
  )
}

export default TopNav;