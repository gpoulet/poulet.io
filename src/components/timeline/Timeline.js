import React from 'react';

import TimelineEvent from './TimelineEvent';
import './timeline.css';

import {getTimeline} from './../../services/jsonServices';

export default class Timeline extends React.Component {

  constructor() {
    super();
    this.state = { timeline: [] }
  }

  componentDidMount() {
    getTimeline(this.onSuccess, this.onError);
  }

  onSuccess = (result) => {
    console.log('onSuccess');
    console.log(result);
    this.setState({timeline:result.timeline});
}

  onError = (error) => {
    console.log('onError');
    console.log(error);
  }

  render() {
    return (
      <div className="container">
        <div className="timeline">
          {this.state.timeline.map((item, index) => <TimelineEvent key={index} {...item} />)}
        </div>
      </div>
    );
  }
}