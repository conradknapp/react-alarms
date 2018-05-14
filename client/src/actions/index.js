import axios from "axios";
import sortBy from 'lodash.sortby';

import * as actionTypes from "./types";

const ALARMS_URL = "/api/alarms";
const LOGS_URL = "/api/logs";
const ALERTS_URL = "/api/alerts";

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

export const onCreateLog = async (alarmId, alertId) => {
  const response = await axios.post(LOGS_URL,
  {
      "alarmDeviceId": alarmId,
      "alertDeviceId": alertId
  });

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

export const onSortLogs = (logs, prop) => {
  const filteredLogs = sortBy(logs, prop);

  return {
    type: actionTypes.SORT_LOGS,
    payload: filteredLogs
  };
}

export const onFetchAlerts = async () => {
  const response = await axios.get(ALERTS_URL);

  return {
    type: actionTypes.FETCH_ALERTS,
    payload: response
  };
};