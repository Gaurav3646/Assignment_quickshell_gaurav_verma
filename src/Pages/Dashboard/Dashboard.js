import React from "react";
import classes from "./Dashboard.module.css";
import TicketCard from "../../Components/TicketCard/TicketCard";
const Dashboard = () => {
  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.ticketsContainer}>
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
