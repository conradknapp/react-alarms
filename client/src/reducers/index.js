import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import alarmsReducer from "./alarms_reducer";

const rootReducer = combineReducers({
  alarms: alarmsReducer,
  form: formReducer
});

export default rootReducer;