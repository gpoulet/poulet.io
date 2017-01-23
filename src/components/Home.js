import React from 'react';
import {Link} from 'react-router';
// import $ from 'jquery';

export default class Home extends React.Component {
  // componentDidMount() {
  //   $(document).ready(function(){
  //     $('.parallax').parallax();
  //   });
  // }

  render() {
    return (
      <div className="home">

        <h1 className="white-text center-align">Gauthier POULET</h1>

        <h2 className="white-text light center-align">Geek Software Engineer</h2>

        <h4 className="white-text light center-align">
          <i className="material-icons small amber-text text-lighten-2">location_on</i> Poitiers</h4>

        <div className="center-align">
          <Link to="/skills">
            <a className="waves-effect waves-light btn-large light-blue darken-3 home-button">
              <i className="material-icons left">equalizer</i>
              Skills</a>
          </Link>


        </div>
      </div>
    );
  }
}