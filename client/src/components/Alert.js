import React from 'react';

const Alert = ({ handleActivateAlarm, description, category }) => {
  return category && (
    <button onClick={handleActivateAlarm}>
      <img
        className="alarm-button__icon"
        src={`./icons/${description}.svg`}
        alt={`${description} icon`}
      />
    </button>
  );
};

export default Alert;