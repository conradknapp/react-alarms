import * as actionTypes from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LOGS:
      return action.payload.data;
    case actionTypes.CREATE_LOG:
      return [...state, action.payload.data];
    default:
      return state;
  }
};