export const FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS";
export const GROUP_BY_STATUS_SUCCESS = "GROUP_BY_STATUS_SUCCESS";
export const GROUP_BY_USER_SUCCESS = "GROUP_BY_USER_SUCCESS";
export const GROUP_BY_PRIORITY_SUCCESS = "GROUP_BY_PRIORITY_SUCCESS";
export const SORT_BY_PRIORITY_SUCCESS = "SORT_BY_PRIORITY_SUCCESS";
export const SORT_BY_TITLE_SUCCESS = "SORT_BY_TITLE_SUCCESS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const fetchTicketsSuccess = ({ tickets, users }) => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: { tickets, users },
});

export const groupByStatusSuccess = ({ groupedTickets }) => ({
  type: GROUP_BY_STATUS_SUCCESS,
  payload: { groupedTickets },
});

export const groupByUserSuccess = ({ groupedTickets }) => ({
  type: GROUP_BY_USER_SUCCESS,
  payload: { groupedTickets },
});

export const groupByPrioritySuccess = ({ groupedTickets }) => ({
  type: GROUP_BY_PRIORITY_SUCCESS,
  payload: { groupedTickets },
});

export const sortByPrioritySuccess = ({ groupedData }) => ({
  type: SORT_BY_PRIORITY_SUCCESS,
  payload: { groupedData },
});

export const sortByTitleSuccess = ({ groupedData }) => ({
  type: SORT_BY_TITLE_SUCCESS,
  payload: { groupedData },
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  isLoading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});
