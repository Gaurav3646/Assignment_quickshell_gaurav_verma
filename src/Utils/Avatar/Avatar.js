import React from "react";
import classes from "./Avatar.module.css";
import User1 from "../../assets/Profiles/User-1.avif";
const Avatar = ({ online }) => {
  return (
    <div className={classes.avatarContainer}>
      <div className={classes.avatar}>
        <img src={User1} alt="User Avatar" />
      </div>
      <div
        className={`${classes.statusDot} ${
          online ? classes.online : classes.offline
        }`}
      ></div>
    </div>
  );
};

export default Avatar;
