import React from "react";
import "./Layout.scss";

import { Switch, Route, NavLink } from "react-router-dom";

// nav
// import AllMail from "./AllMail/AllMail";
import Inbox from "./Inbox/Inbox";
import Spam from "./Spam/Spam";
import Trash from "./Trash/Trash";

// implement this one at the end
// import NotFound from "./NotFound";

const Layout = (props) => {
  // this is redundant delete it at the end
  // let {inbox, spam, trash} = { ...props.state };
  // console.log("layout props from state", props)
  return (
    <>
      <div className="Layout">
        <NavLink to="/inbox">Inbox</NavLink>
        <NavLink to="/spam">Spam</NavLink>
        {/* <NavLink to="/allmail">All Mail</NavLink> */}
        <NavLink to="/trash">Trash</NavLink>
      </div>

      <Switch>
        <Route 
          path="/inbox" 
          render={() => (
            <Inbox state={props.state.inbox} 
            toggleChecked={props.toggleChecked}
            addToTrash={props.addToTrash}
            addToStarred={props.addToStarred}
            toggleChecked={props.toggleChecked}
            /> )} 
        />
        <Route 
          path="/spam" 
          render={() => (
            <Spam state={props.state.spam} 
            addToInbox={props.addToInbox}
            toggleChecked={props.toggleChecked}
            addToTrash={props.addToTrash}
            addToStarred={props.addToStarred}
            /> )} 
        />

        {/* <Route path="/allmail" component={AllMail} /> */}
        <Route 
          path="/trash" 
          render ={() => (
          <Trash state={props.state.trash}
          toggleChecked={props.toggleChecked}
          />
        )} />
      </Switch>
    </>
  )
};

export default Layout;
//   