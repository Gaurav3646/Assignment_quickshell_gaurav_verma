import React from "react";
import classes from "./Avatar.module.css";
import Usr1 from "../../assets/usr-1.jpeg";
const Avatar = ({ online, pic }) => {
  const avatarSrc = pic ? require(`../../assets/${pic}.jpeg`) : Usr1;
  return (
    <div className={classes.avatarContainer}>
      <div className={classes.avatar}>
        <img src={avatarSrc} alt="User Avatar" />
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
