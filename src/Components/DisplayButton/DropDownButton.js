import React, { useEffect, useState } from "react";
import classes from "./DropDownButton.module.css";
import setting from "../../assets/setting.png";
import down from "../../assets/down.png";
import { useDispatch, useSelector } from "react-redux";
import {
  groupByPriority,
  groupByStatus,
  groupByUser,
  sortByPriority,
  sortByTitle,
} from "../../redux/thunk";
const DropDownButton = ({ hello }) => {
  const tickets = useSelector((data) => data.tickets);
  const [isOpen, setIsOpen] = useState(false);

  // console.log(tickets);
  const dispatch = useDispatch();
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "Status"
  );
  const [ordering, setOrdering] = useState(
    localStorage.getItem("ordering") || "Priority"
  );

  useEffect(() => {
    // Update local storage when grouping or ordering changes
    switch (grouping) {
      case "Status":
        dispatch(groupByStatus());
        break;
      case "User":
        dispatch(groupByUser());
        break;
      case "Priority":
        dispatch(groupByPriority());
        break;

      default:
    }
    switch (ordering) {
      case "Title":
        dispatch(sortByTitle());
        break;
      case "Priority":
        dispatch(sortByPriority());
        break;
      default:
    }
    localStorage.setItem("ordering", ordering);
    localStorage.setItem("grouping", grouping);

    setIsOpen(false);
  }, [grouping, ordering, tickets]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleGroupingChange = (event) => {
    const selectedOption = event.target.value;

    setGrouping(selectedOption);
  };

  const handleOrderingChange = (event) => {
    const selectedOption = event.target.value;
    setOrdering(selectedOption);
  };

  return (
    <div className={classes.customDropdown}>
      <div className={classes.dropdownButton} onClick={toggleDropdown}>
        <img src={setting} alt="display icon" />
        <span>Display</span>
        <img src={down} alt="dropdown icon" />
      </div>
      {isOpen && (
        <ul className={classes.dropdownOptions}>
          <li>
            <div>Grouping</div>{" "}
            <select onChange={handleGroupingChange} defaultValue={grouping}>
              <option value="Status">Status</option>
              <option value="User">User</option>
              <option value="Priority">Priority</option>
            </select>
          </li>
          <li>
            <div>Ordering</div>{" "}
            <select onChange={handleOrderingChange} defaultValue={ordering}>
              <option value="Priority">Priority</option>
              <option value="Title">Title</option>
            </select>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDownButton;
