import React from "react";
import "./TopNav.scss";

import Social from "./Social/Social";
import Promotions from "./Promotions/Promotions";
import Primary from "./Primary/Primary";

const TopNav = (props) => {
  return (
    <div className="TopNav">
      <span style={{ display: "flex" }}>
        <Primary />
        <Social />
        <Promotions />
      </span>
    </div >
  )
}

export default TopNav;