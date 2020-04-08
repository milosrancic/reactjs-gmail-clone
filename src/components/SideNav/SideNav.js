import React from "react";
import "./SideNav.scss"
import { Switch, Route, Link } from "react-router-dom";

import AllMail from "./AllMail/AllMail";
import Inbox from "./Inbox/Inbox";
import Sent from "./Sent/Sent";
import Starred from "./Starred/Starred";
import Trash from "./Trash/Trash";
import Spam from "./Spam/Spam";

const SideNav = () => {
  return (
    <div className="SideNav">
      <ul>
        {/* <li>
          <Link to="/sidenav/compose">Compose</Link>
        </li> */}
        <li>
          <Link to="/inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/starred">Starred</Link>
        </li>
        <li>
          <Link to="/sent">Sent</Link>
        </li>
        <li>
          <Link to="/allmail">All Mail</Link>
        </li>
        <li>
          <Link to="/spam">Spam</Link>
        </li>
        <li>
          <Link to="/trash">Trash</Link>
        </li>
      </ul>


      <Switch>
        <Route path="/inbox">
          <Inbox />
        </Route>
        <Route path="/starred">
          <Starred />
        </Route>
        <Route path="/sent">
          <Sent />
        </Route>
        <Route path="/allmail">
          <AllMail />
        </Route>
        <Route path="/spam">
          <Spam />
        </Route>
        <Route path="/trash">
          <Trash />
        </Route>
      </Switch>
    </div>
  )
}

export default SideNav;

//       <Switch>
//         <Route path="/topnav/primary">
//           <Primary />
//         </Route>
//         <Route path="/topnav/social">
//           <Social />
//         </Route>
//         <Route path="/topnav/promotions">
//           <Promotions />
//         </Route>
//       </Switch>
//     </div>
//   )
// }

// export default TopNav;