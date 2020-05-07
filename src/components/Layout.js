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
  // this is redundant delete it at the end
  let {inbox, spam} = { ...props.state };
  console.log("state inbox:", inbox)
  console.log("state spam:", spam)
  console.log("layout props from state", props)

  // do this for conditional rendering of functions in item component
  console.log(props.addToInbox ? true : false)
  
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
          render={(props) => (
            <Inbox state={inbox} 
            addToInbox={props.addToInbox} 
            toggleChecked={props.toggleChecked} /> )} 
        />
        <Route 
          path="/spam" 
          render={(props) => (
            <Spam state={spam} 
            addToInbox={props.addToInbox}
            toggleChecked={props.toggleChecked}  /> )} 
        />

        {/* <Route path="/allmail" component={AllMail} /> */}
        {/* <Route path="/trash" component={Trash} /> */}
      </Switch>
    </>
  )
};

export default Layout;