import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

export default class NavBar extends React.Component {

  componentDidMount() {
    $('.button-collapse').sideNav();
  }

  closeSideNav() {
    $('.button-collapse').sideNav('hide');
  }

  render() {
    return (
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo">Gauthier POULET</a>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i
                className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><Link activeClassName={'active'} className="menu" to={'/home'}>Home</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/skills'}>Skills</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/timeline'}>Timeline</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/conferences'}>Conferences</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/blog'}>Blog</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/contact'}>Contact</Link></li>
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li>
                  <div className="userView">
                    <div className="background"></div>
                    <a href="#!user"><img className="circle" src="images/gpoulet.png"/></a>
                    <a href="#!name"><span className="white-text name">Gauthier POULET</span></a>
                    <a href="#!email"><span className="grey-text text-lighten-3 email">Geek Software Engineer</span></a>
                  </div>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/home'}>
                  <i className="material-icons">home</i>Home</Link>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/skills'}>
                  <i className="material-icons">perm_identity</i>Skills</Link>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/timeline'}>
                  <i className="material-icons">timeline</i>Timeline</Link>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/conferences'}>
                  <i className="material-icons">language</i>Conferences</Link>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/blog'}>
                  <i className="material-icons">supervisor_account</i>Blog</Link>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/contact'}>
                  <i className="material-icons">mail</i>Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>


      </div>
    );
  }
}