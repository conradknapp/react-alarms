import React from 'react';

const Alarm = ({ description, id }) => (
  <li key={id}>{description}</li>
);

export default Alarm;