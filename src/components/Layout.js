import React from "react";
import "./Layout.scss";

import { Switch, Route, Link } from "react-router-dom";

// top nav
import Social from "./Top/Social/Social";
import Promotions from "./Top/Promotions/Promotions";
import Primary from "./Top/Primary/Primary";

// side nav
import AllMail from "./Side/AllMail/AllMail";
import Inbox from "./Side/Inbox/Inbox";
import Sent from "./Side/Sent/Sent";
import Starred from "./Side/Starred/Starred";
import Trash from "./Side/Trash/Trash";
import Spam from "./Side/Spam/Spam";

const Layout = () => {
  return (
    <div className="Layout">
      <ul>
        <li className="top-nav div2">
          <Link to="/primary">Primary</Link>
        </li>
        <li className="top-nav div3">
          <Link to="/social">Social</Link>
        </li>
        <li className="top-nav div4">
          <Link to="/promotions">Promotions</Link>
        </li>


        <li className="side-nav div1">
          <Link to="/sidenav/compose">Compose</Link>
        </li>
        <li className="side-nav div5">
          <Link to="/inbox">Inbox</Link>
        </li>
        <li className="side-nav div5">
          <Link to="/starred">Starred</Link>
        </li>
        <li className="side-nav div6">
          <Link to="/sent">Sent</Link>
        </li>
        <li className="side-nav div6">
          <Link to="/allmail">All Mail</Link>
        </li>
        <li className="side-nav div7">
          <Link to="/spam">Spam</Link>
        </li>
        <li className="side-nav div8">
          <Link to="/trash">Trash</Link>
        </li>
      </ul>

      <div className="div11">
        conten
      </div>


      <Switch>
        <Route path="/inbox" component={Inbox} />
        <Route path="/starred" component={Starred} />
        <Route path="/sent" component={Sent} />
        <Route path="/allmail" component={AllMail} />
        <Route path="/spam" component={Spam} />
        <Route path="/trash" component={Trash} />
        <Route path="/primary" component={Primary} />
        <Route path="/social" component={Social} />
        <Route path="/promotions" component={Promotions} />
      </Switch>
    </div>

  )
};

export default Layout;