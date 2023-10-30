import React from "react";
import classes from "./NavBar.module.css";
import DropDownButton from "../DisplayButton/DropDownButton";

// Name - Gauarv Verma
// Email - gauravverma3646@gmail.com

const NavBar = () => {
  return (
    <div className={classes.navBarContainer}>
      <DropDownButton />
    </div>
  );
};

export default NavBar;
