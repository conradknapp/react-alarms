import * as actionTypes from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALERTS:
      return action.payload.data;
    default:
      return state;
  }
};