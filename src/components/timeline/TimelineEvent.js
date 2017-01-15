import React from 'react';

import Date from './../util/Date';
import Location from './../util/Location';

export default class TimelineEvent extends React.Component {

  static propTypes = {
    icon: React.PropTypes.string,
    iconColor: React.PropTypes.string,
    image: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    content: React.PropTypes.string,
    modalTitle: React.PropTypes.string,
    modalContent: React.PropTypes.string
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const clazz=`timeline-badge white-text ${this.props.iconColor}`;

    return (
      <div className="timeline-event">
        <div className="card timeline-content">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={this.props.image} alt={this.props.alt} />
          </div>
          <div className="card-content">
            <span className="card-title activator">{this.props.title}<i className="material-icons right grey-text text-darken-4">more_vert</i></span>
            <p><Date date={this.props.date} /></p>
            <p><Location address={this.props.location} /></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{this.props.modalTitle}<i className="material-icons right">close</i></span>
            <p>{this.props.modalContent}</p>
          </div>
        </div>
        <div className={clazz}><i className="material-icons">{this.props.icon}</i></div>
      </div>
    );
  }
}