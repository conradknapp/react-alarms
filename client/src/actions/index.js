import axios from "axios";

import * as actionTypes from "./types";

const ALARMS_URL = "api/alarms";
// const LOGS_URL = "http://localhost:4444/api/logs";

export const onFetchAlarms = async () => {
  const response = await axios.get(ALARMS_URL);

  return {
    type: actionTypes.FETCH_ALARMS,
    payload: response
  };
};

export const onCreateAlarm = async (values, cb) => {
  const response = await axios.post(ALARMS_URL, { "description": values });

  return {
    type: actionTypes.CREATE_ALARM,
    payload: response
  };
};