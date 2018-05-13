import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

import alarmsReducer from "./alarms_reducer";
import alertsReducer from "./alerts_reducer";
import logsReducer from './logs_reducer';
import searchLogsReducer from './search_logs_reducer';

const rootReducer = combineReducers({
  alarms: alarmsReducer,
  alerts: alertsReducer,
  filteredLogs: searchLogsReducer,
  form: reduxFormReducer,
  logs: logsReducer
});

export default rootReducer;