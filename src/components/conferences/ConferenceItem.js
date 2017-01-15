import React from 'react';

export default class ConferenceItem extends React.Component {

  static propTypes = {
    image: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    years: React.PropTypes.array,
    url: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <a href={this.props.url} target="_blank">
              <div
                style={{ backgroundImage: `url(${this.props.image})`, backgroundSize:'100%', backgroundRepeat: 'no-repeat', height: '300px' }}/>
            </a>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p className="card-title truncate">{this.props.name}</p>
              <p>{this.props.years ? this.props.years.join('-') : ''}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}