import axios from "axios";

import * as actionTypes from "./types";

const ALARMS_URL = "/api/alarms";
const LOGS_URL = "/api/logs";

export const onFetchAlarms = async () => {
  const response = await axios.get(ALARMS_URL);

  return {
    type: actionTypes.FETCH_ALARMS,
    payload: response
  };
};

export const onCreateAlarm = async values => {
  const response = await axios.post(ALARMS_URL, { "description": values });

  return {
    type: actionTypes.CREATE_ALARM,
    payload: response
  };
};

export const onFetchLogs = async () => {
  const response = await axios.get(LOGS_URL);

  return {
    type: actionTypes.FETCH_LOGS,
    payload: response
  };
};

export const onCreateLog = async values => {
  const response = await axios.post(LOGS_URL, { "alarmDeviceId": values });

  return {
    type: actionTypes.CREATE_LOG,
    payload: response
  };
};