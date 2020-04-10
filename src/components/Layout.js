import React from "react";
import "./Layout.scss";
import Content from "./Content";

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
      <div className="top-nav primary">
        <Link to="/primary">Primary</Link>
      </div>
      <div className="top-nav social">
        <Link to="/social">Social</Link>
      </div>
      <div className="top-nav promotions">
        <Link to="/promotions">Promotions</Link>
      </div>

      <div className="side-nav compose">
        <Link to="/sidenav/compose">Compose</Link>
      </div>
      <div className="side-nav inbox">
        <Link to="/inbox">Inbox</Link>
      </div>
      <div className="side-nav starred">
        <Link to="/starred">Starred</Link>
      </div>
      <div className="side-nav sent">
        <Link to="/sent">Sent</Link>
      </div>
      <div className="side-nav allmail">
        <Link to="/allmail">All Mail</Link>
      </div>
      <div className="side-nav spam">
        <Link to="/spam">Spam</Link>
      </div>
      <div className="side-nav trash">
        <Link to="/trash">Trash</Link>
      </div>

      <div className="content1">
        <Content prop="some prop" />
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