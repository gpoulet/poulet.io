import React from 'react';

const Date = (props) => {
  return (
    <span className="valign-center truncate">
      <i className="material-icons amber-text">query_builder</i>&nbsp;{props.date}
    </span>
  );

}

export default Date;
