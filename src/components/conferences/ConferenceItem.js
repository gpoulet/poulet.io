import React from 'react';

import Date from '../util/Date';
import Location from '../util/Location';

const ConferenceItem = (props) => {
    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <a href={props.url} target="_blank">
              <div
                style={{ backgroundImage: `url(${props.image})`, backgroundSize:'100%', backgroundRepeat: 'no-repeat', height: '300px' }}/>
            </a>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p className="card-title truncate">{props.name}</p>
              <p>{props.years ? <Date date={props.years.join('-')}/> : '' }</p>
              <p><Location address={props.location} /></p>
            </div>
          </div>
        </div>
      </div>
    );
  };


ConferenceItem.propTypes = {
  image: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  years: React.PropTypes.array,
  url: React.PropTypes.string.isRequired,
};

export default ConferenceItem;