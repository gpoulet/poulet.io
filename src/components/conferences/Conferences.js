import React from 'react';

import ConferenceItem from './ConferenceItem';
import {getConferences} from '../../services/jsonServices';

export default class Conferences extends React.Component {

  constructor() {
    super();
    this.state = {
      conferences: [],
      userGroups: []
    }
  }

  componentDidMount() {
    getConferences(this.onSuccess, this.onError);
  }

  onSuccess = (result) => {
    console.log('onSuccess');
    console.log(result);
    this.setState({ conferences: result.conferences, userGroups: result.userGroups });
  }

  onError = (error) => {
    console.log('onError');
    console.log(error);
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2 className="header">Conferences</h2>
          <div className="row">

              {this.state.conferences.map((conferences, index) => <ConferenceItem key={index} {...conferences} />)}
            </div>
        </div>

        <div>
          <h2 className="header">User Groups</h2>
          <div className="row">
              {this.state.userGroups.map((userGroups, index) => <ConferenceItem key={index} {...userGroups} />)}
          </div>
        </div>
      </div>
    );
  }
}