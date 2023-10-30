import {
  FETCH_TICKETS_SUCCESS,
  GROUP_BY_STATUS_SUCCESS,
  GROUP_BY_USER_SUCCESS,
  GROUP_BY_PRIORITY_SUCCESS,
  SORT_BY_PRIORITY_SUCCESS,
  SORT_BY_TITLE_SUCCESS,
  SET_LOADING,
  SET_ERROR,
} from "./actions";

const initialState = {
  tickets: [],
  users: [],
  grouping: null,
  groupedData: [],
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.payload.tickets,
        users: action.payload.users,
      };

    case GROUP_BY_STATUS_SUCCESS:
      return {
        ...state,
        groupedData: action.payload.groupedTickets,
        grouping: "Status",
      };

    case GROUP_BY_USER_SUCCESS:
      return {
        ...state,
        groupedData: action.payload.groupedTickets,
        grouping: "User",
      };

    case GROUP_BY_PRIORITY_SUCCESS:
      return {
        ...state,
        groupedData: action.payload.groupedTickets,
        grouping: "Priority",
      };

    case SORT_BY_PRIORITY_SUCCESS:
      return {
        ...state,
        groupedData: action.payload.groupedData,
      };

    case SORT_BY_TITLE_SUCCESS:
      return {
        ...state,
        groupedData: action.payload.groupedData,
      };
    case SET_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default rootReducer;
