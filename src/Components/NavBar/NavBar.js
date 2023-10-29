import React from "react";
import classes from "./NavBar.module.css";
import DropDownButton from "../DisplayButton/DropDownButton";
const NavBar = () => {
  return (
    <div className={classes.navBarContainer}>
      <DropDownButton />
    </div>
  );
};

export default NavBar;
