import React from 'react';

const Location = (props) => {
  return (
    <span className="valign-center truncate">
      <i className="material-icons amber-text">location_on</i>&nbsp;{props.address}
    </span>
  );

}

export default Location;
