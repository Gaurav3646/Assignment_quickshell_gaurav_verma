import React from "react";
import classes from "./TicketsList.module.css";
import Avatar from "../../Utils/Avatar/Avatar";
import dots from "../../assets/ellipsis.png";
import plus from "../../assets/plus.png";
import TicketCard from "../TicketCard/TicketCard";
import { useSelector } from "react-redux";

const priorities = [
  {
    title: "No Priority",
  },
  {
    title: "Urgent",
  },
  {
    title: "High",
  },
  {
    title: "Medium",
  },
  {
    title: "Low",
  },
];
const TicketsList = ({ title, tickets, grouping, user }) => {
  const users = useSelector((data) => data.users);

  return (
    <div className={classes.ticketContainer}>
      <div className={classes.header}>
        <div className={classes.headerTitle}>
          {grouping === "User" && (
            <Avatar online={user.available} pic={title} />
          )}
          {grouping === "User" && <span>{user.name}</span>}

          {grouping === "Status" && (
            <span>
              <img src={require(`../../assets/${title}.png`)} alt="logo" />
            </span>
          )}
          {grouping === "Status" && <span>{title}</span>}
          {grouping === "Priority" && (
            <span>
              <img src={require(`../../assets/${title}.png`)} alt="logo" />
            </span>
          )}
          {grouping === "Priority" && <span>{priorities[title].title}</span>}
          <span>{tickets.length}</span>
        </div>
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
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            grouping={grouping}
            user={users[ticket.userId]}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketsList;
