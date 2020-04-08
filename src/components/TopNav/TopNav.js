import React from "react";
import "./TopNav.scss";
import { Switch, Route, Link } from "react-router-dom";

import Social from "./Social/Social";
import Promotions from "./Promotions/Promotions";
import Primary from "./Primary/Primary";

const TopNav = () => {
  return (
    <div className="TopNav">
      <ul>
        <li>
          <Link to="/primary">Primary</Link>
        </li>
        <li>
          <Link to="/social">Social</Link>
        </li>
        <li>
          <Link to="/promotions">Promotions</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/primary">
          <Primary />
        </Route>
        <Route path="/social">
          <Social />
        </Route>
        <Route path="/promotions">
          <Promotions />
        </Route>
      </Switch>
    </div>
  )
}

export default TopNav;