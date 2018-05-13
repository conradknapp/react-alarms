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

export const onCreateAlarm = async (description, category) => {
  const response = await axios.post(ALARMS_URL,
    { "description": description, "category": category });

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

export const onSearchLogs = (searchTerm, logs) => {
  const regex = new RegExp(searchTerm, 'gi');
  const filteredLogs = logs.filter(log => {
    return log.alarmDeviceId.description.match(regex);
  });

  return {
    type: actionTypes.SEARCH_LOGS,
    payload: filteredLogs
  };
}