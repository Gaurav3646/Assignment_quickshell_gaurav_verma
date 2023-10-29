import React, { useState } from "react";
import classes from "./DropDownButton.module.css";
const DropDownButton = ({ hello }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  console.log(hello);
  return (
    <div className={classes.customDropdown}>
      <div className={classes.dropdownButton} onClick={toggleDropdown}>
        Display
      </div>
      {isOpen && (
        <ul className={classes.dropdownOptions}>
          <li>
            <div>Grouping</div>{" "}
            <select>
              <option>Status</option>
              <option>User</option>
              <option>Priority</option>
            </select>
          </li>
          <li>
            <div>Ordering</div>{" "}
            <select>
              <option>Priority</option>
              <option>Title</option>
            </select>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDownButton;
