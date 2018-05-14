import React from 'react';
import ReactTooltip from 'react-tooltip'

const Alert = ({ handleActivateAlarm, description, category }) => {
  const stovePipesButtons = () => {
    return ((description === 'fire' || description === "leak" || description === "power-outage") && (category === "stove" || category === "pipes"));
  }

  const fenceWindowDoorButtons = () => {
    return ((description === 'thief' || description === 'fire') && (category === "fence" || category === "door" || category === "window"));
  }

  return (fenceWindowDoorButtons() || stovePipesButtons()) && (
    <button onClick={handleActivateAlarm}>
      <img
        data-tip={`Trigger ${description} alert`}
        className="alarm-button__icon"
        src={`./icons/${description}.svg`}
        alt={`${description} icon`}
      />
    <ReactTooltip place="top" type="dark" effect="float"/>
    </button>
  );
};

export default Alert;