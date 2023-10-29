import React from "react";
import classes from "./TicketCard.module.css";
import Card from "../../Utils/Card/Card";
import Avatar from "../../Utils/Avatar/Avatar";
import dots from "../../assets/ellipsis.png";
import plus from "../../assets/plus.png";
const TicketCard = () => {
  return (
    <div className={classes.ticketContainer}>
      <div className={classes.header}>
        <div>Title</div>
        <div className={classes.menuIcons}>
          <span>
            {" "}
            <img src={plus} alt="Plus" color="gray" />
          </span>
          <span>
            <img src={dots} alt="Dot" color="gray" />
          </span>
        </div>
      </div>
      <div className={classes.cardContainers}>
        <Card>
          <div className={classes.cardHeader}>
            <span>CAM-1</span>
            <Avatar online={true} />
          </div>
          <div className={classes.title}>Update User Profile Page UI</div>
          <div className={classes.buttons}>
            <button className={classes.featuredButton}>
              <img src={dots} alt="Dot" color="gray" />
            </button>
            <button className={classes.featuredButton}>
              <span></span> Feature Request
            </button>
          </div>
        </Card>
        <Card>
          <div className={classes.cardHeader}>
            <span>CAM-1</span>
            <Avatar online={true} />
          </div>
          <div className={classes.title}>Update User Profile Page UI</div>
          <div className={classes.buttons}>
            <button className={classes.featuredButton}>
              <img src={dots} alt="Dot" color="gray" />
            </button>
            <button className={classes.featuredButton}>
              <span></span> Feature Request
            </button>
          </div>
        </Card>
        <Card>
          <div className={classes.cardHeader}>
            <span>CAM-1</span>
            <Avatar online={true} />
          </div>
          <div className={classes.title}>Update User Profile Page UI</div>
          <div className={classes.buttons}>
            <button className={classes.featuredButton}>
              <img src={dots} alt="Dot" color="gray" />
            </button>
            <button className={classes.featuredButton}>
              <span></span> Feature Request
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TicketCard;
