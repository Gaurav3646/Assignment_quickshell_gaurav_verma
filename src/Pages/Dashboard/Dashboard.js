import React from "react";
import classes from "./Dashboard.module.css";
import { useSelector } from "react-redux";
import TicketsList from "../../Components/TicketsList/TicketsList";
import { Hourglass } from "react-loader-spinner";

const Dashboard = () => {
  const groupedData = useSelector((data) => data.groupedData);
  const users = useSelector((data) => data.users);
  const grouping = useSelector((data) => data.grouping);
  const isLoading = useSelector((data) => data.isLoading);

  return (
    <div className={classes.dashboardContainer}>
      <div className={classes.ticketsContainer}>
        {!isLoading &&
          Object.entries(groupedData).map((val, index) => (
            <TicketsList
              key={index}
              title={val[0]}
              tickets={val[1]}
              grouping={grouping}
              user={users[val[0]]}
            />
          ))}
        {isLoading && (
          <div className={classes.loader}>
            <Hourglass
              visible={true}
              height="60"
              width="60"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              colors={["gray", "#72a1ed"]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
