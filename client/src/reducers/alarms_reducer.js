import * as actionTypes from "../actions/types";

const initState = [];

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALARMS:
      return action.payload.data;
    case actionTypes.CREATE_ALARM:
      return [...state, action.payload.data]
    default:
      return state;
  }
};