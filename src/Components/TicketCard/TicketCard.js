import React from "react";
import classes from "./TicketCard.module.css";
import Card from "../../Utils/Card/Card";
import Avatar from "../../Utils/Avatar/Avatar";

const TicketCard = ({ ticket, grouping, user }) => {
  return (
    <Card>
      <div className={classes.cardHeader}>
        <span>{ticket.id}</span>
        {grouping !== "User" && (
          <Avatar online={user.available} pic={ticket.userId} />
        )}
      </div>
      <div className={classes.title}>{ticket.title}</div>
      <div className={classes.buttons}>
        {grouping !== "Priority" && (
          <button className={classes.featuredButton}>
            <img
              src={require(`../../assets/${ticket.priority}.png`)}
              alt="Status"
              color="gray"
            />
          </button>
        )}
        {grouping !== "Status" && (
          <button className={classes.featuredButton}>
            <img
              src={require(`../../assets/${ticket.status}.png`)}
              alt="Status"
              color="gray"
            />
          </button>
        )}
        {ticket.tag.map((data, index) => (
          <button className={classes.featuredButton} key={index}>
            <span></span>
            {data}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default TicketCard;
