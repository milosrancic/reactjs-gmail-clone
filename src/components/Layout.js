import React from "react";
import "./Layout.scss";

import { Switch, Route, NavLink } from "react-router-dom";

// nav
// import AllMail from "./AllMail/AllMail";
import Inbox from "./Inbox/Inbox";
// import Sent from "./Sent/Sent";
import Starred from "./Starred/Starred";
// import Trash from "./Trash/Trash";
// import Spam from "./Spam/Spam";

const Layout = (props) => {
  // let state = { ...props.state };
  // console.log("state from APP:", state)
  return (
    <>
      <div className="Layout">
        <NavLink to="/inbox">Inbox</NavLink>
        <NavLink to="/starred">Starred</NavLink>
        {/* <NavLink to="/sent">Sent</NavLink> */}
        {/* <NavLink to="/allmail">All Mail</NavLink> */}
        {/* <NavLink to="/spam">Spam</NavLink> */}
        {/* <NavLink to="/trash">Trash</NavLink> */}
      </div>

      {/* component={Inbox}  */}
      <Switch>
        <Route path="/inbox" 
          render={() => (<Inbox 
            state={props.state.inbox} 
          click={props.click}
           />)} />
        <Route path="/starred" 
          render={() => (<Starred 
          state={props.state.starred} 
          addToInbox={props.addToInbox} /> )} />
        {/* <Route path="/sent" component={Sent} /> */}
        {/* <Route path="/allmail" component={AllMail} /> */}
        {/* <Route path="/spam" component={Spam} /> */}
        {/* <Route path="/trash" component={Trash} /> */}
      </Switch>
    </>
  )
};

export default Layout;