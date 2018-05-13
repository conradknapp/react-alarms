import * as actionTypes from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_LOGS:
      return action.payload;
    default:
      return state;
  }
}