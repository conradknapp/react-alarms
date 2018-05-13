import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import alarmsReducer from "./alarms_reducer";
import logsReducer from './logs_reducer';
import searchLogsReducer from './search_logs_reducer';

const rootReducer = combineReducers({
  alarms: alarmsReducer,
  logs: logsReducer,
  filteredLogs: searchLogsReducer,
  form: formReducer
});

export default rootReducer;