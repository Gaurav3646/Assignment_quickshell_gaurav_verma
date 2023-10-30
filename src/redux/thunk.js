import axios from "axios";
import {
  fetchTicketsSuccess,
  groupByPrioritySuccess,
  groupByStatusSuccess,
  groupByUserSuccess,
  sortByPrioritySuccess,
  sortByTitleSuccess,
  setLoading,
  setError,
} from "./actions";

export const fetchTickets = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const { data } = await axios.get(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const users = {};
    data.users.forEach((usr) => {
      users[usr.id] = usr;
    });

    dispatch(fetchTicketsSuccess({ tickets: data.tickets, users }));
  } catch (error) {
    setError(setError(error));
  } finally {
    dispatch(setLoading(false));
  }
};

export const groupByStatus = () => (dispatch, getState) => {
  const { tickets } = getState();
  dispatch(setLoading(true));
  const groupedTickets = {};
  tickets.forEach((ticket) => {
    const status = ticket.status;
    if (!groupedTickets[status]) {
      groupedTickets[status] = [];
    }
    groupedTickets[status].push(ticket);
  });

  dispatch(groupByStatusSuccess({ groupedTickets }));
  dispatch(setLoading(false));
};

export const groupByUser = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  const { tickets } = getState();
  const groupedTickets = {};
  tickets.forEach((ticket) => {
    const userId = ticket.userId;
    if (!groupedTickets[userId]) {
      groupedTickets[userId] = [];
    }
    groupedTickets[userId].push(ticket);
  });

  dispatch(groupByUserSuccess({ groupedTickets }));

  dispatch(setLoading(false));
};

export const groupByPriority = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  const { tickets } = getState();
  const groupedTickets = {};
  tickets.forEach((ticket) => {
    const priority = ticket.priority;
    if (!groupedTickets[priority]) {
      groupedTickets[priority] = [];
    }
    groupedTickets[priority].push(ticket);
  });

  dispatch(groupByPrioritySuccess({ groupedTickets }));
  dispatch(setLoading(false));
};

export const sortByPriority = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  const { groupedData } = getState();
  for (const groupKey in groupedData) {
    if (groupedData.hasOwnProperty(groupKey)) {
      const sortedGroup = groupedData[groupKey];
      sortedGroup.sort((a, b) => {
        return b.priority - a.priority;
      });
      groupedData[groupKey] = sortedGroup;
    }
  }

  dispatch(sortByPrioritySuccess({ groupedData }));
  dispatch(setLoading(false));
};

export const sortByTitle = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  const { groupedData } = getState();
  for (const groupKey in groupedData) {
    if (groupedData.hasOwnProperty(groupKey)) {
      const sortedGroup = groupedData[groupKey];
      sortedGroup.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      groupedData[groupKey] = sortedGroup;
    }
  }

  dispatch(sortByTitleSuccess({ groupedData }));
  dispatch(setLoading(false));
};
