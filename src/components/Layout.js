import React from "react";
import "./Layout.scss";

import { Switch, Route, Link } from "react-router-dom";

// hoc
// import Hoc from "./Hoc";

// nav
import AllMail from "./Side/AllMail/AllMail";
import Inbox from "./Side/Inbox/Inbox";
import Sent from "./Side/Sent/Sent";
import Starred from "./Side/Starred/Starred";
import Trash from "./Side/Trash/Trash";
import Spam from "./Side/Spam/Spam";

const Layout = (props) => {
  // let state = { ...props.state };
  // console.log("state from APP:", state)
  return (
    <>
      <div className="Layout">
        <Link to="/inbox">Inbox</Link>
        <Link to="/starred">Starred</Link>
        <Link to="/sent">Sent</Link>
        <Link to="/allmail">All Mail</Link>
        <Link to="/spam">Spam</Link>
        <Link to="/trash">Trash</Link>
      </div>

      {/* component={Inbox}  */}
      <Switch>
        <Route path="/inbox" 
          render={() => (<Inbox 
          state={props.state.inbox} {...props.state.inbox} 
          click={props.click} />)} />
        <Route path="/starred" 
          render={() => (<Starred 
          state={props.state.starred} {...props.state.starred} 
          click={props.click} /> )} />
        <Route path="/sent" component={Sent} />
        <Route path="/allmail" component={AllMail} />
        <Route path="/spam" component={Spam} />
        <Route path="/trash" component={Trash} />
      </Switch>
    </>
  )
};

export default Layout;