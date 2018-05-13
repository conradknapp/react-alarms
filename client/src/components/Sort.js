import React from 'react';
import sortBy from 'lodash.sortby';

const SORTS = {
  DESC: list => sortBy(list, "alarmDeviceId.description"),
  ALERT: list => sortBy(list, "alertDeviceId.description"),
  DATE: list => sortBy(list, "createdDate").reverse(),
  ID: list => sortBy(list, "_id").reverse(),
};

class Sort extends React.Component {
  onSort = (sortKey, logs) => {
    const sortedList = SORTS[sortKey](logs);
    console.log(sortedList);
  }

  render() {
    const { sortKey, children, logs, className } = this.props;
    return (
      <button className={className} onClick={() => this.onSort(sortKey, logs)}>
        {children}
      </button>
    );
  }
};

export default Sort;