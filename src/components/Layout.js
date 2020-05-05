import React from "react";
import "./Layout.scss";

import { Switch, Route, NavLink } from "react-router-dom";

// nav
// import AllMail from "./AllMail/AllMail";
import Inbox from "./Inbox/Inbox";
import Spam from "./Spam/Spam";
// import Trash from "./Trash/Trash";

// implement this one at the end
// import NotFound from "./NotFound";

const Layout = (props) => {
  // let state = { ...props.state };
  // console.log("state from APP:", state)
  return (
    <>
      <div className="Layout">
        <NavLink to="/inbox">Inbox</NavLink>
        <NavLink to="/spam">Spam</NavLink>
        {/* <NavLink to="/allmail">All Mail</NavLink> */}
        {/* <NavLink to="/trash">Trash</NavLink> */}
      </div>

      <Switch>
        <Route 
          path="/inbox" 
          render={() => (<Inbox state={props.state.inbox} /> )} 
        />
        <Route 
          path="/spam" 
          render={() => (<Spam state={props.state.spam} /> )} 
        />
        {/* <Route path="/allmail" component={AllMail} /> */}
        {/* <Route path="/trash" component={Trash} /> */}
      </Switch>
    </>
  )
};

export default Layout;