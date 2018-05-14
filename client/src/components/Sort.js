import React from 'react';

const Sort = ({ sortKey, children, logs, className, onSort }) => (
  <button className={className} onClick={() => onSort(sortKey, logs)}>
    {children}
  </button>
);

export default Sort;