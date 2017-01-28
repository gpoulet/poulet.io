import React from 'react';
import {Link, IndexLink} from 'react-router';
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
              <Link to="/" activeClassName={'active'} className="brand-logo">
                Gauthier POULET</Link>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i
                className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><IndexLink activeClassName={'active'} className="menu" to={'/'}>Home</IndexLink></li>
                <li><Link activeClassName={'active'} className="menu" to={'/skills'}>Skills</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/timeline'}>Timeline</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/conferences'}>Conferences</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/blog'}>Blog</Link></li>
                <li><Link activeClassName={'active'} className="menu" to={'/contact'}>Contact</Link></li>
                {/*<li><Link activeClassName={'active'} className="menu waves-effect waves-light btn light-blue darken-3" to={'/contact'}>Contact</Link></li>*/}

                {/*<li><a href="https://www.github.com/gpoulet" className="menu" target="_blank"><i className="fa fa-github fa-lg nav-icon" /></a></li>*/}
              </ul>
              <ul className="side-nav" id="mobile-demo">
                <li>
                  <div className="userView">
                    <div className="background"></div>
                    <img className="circle" alt="Gauthier POULET" src="images/gauthier-poulet.jpg"/>
                    <span className="white-text name">Gauthier POULET</span>
                    <span className="grey-text text-lighten-3 email">Full-Stack Developer</span>
                  </div>
                </li>
                <li><IndexLink className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/'}>
                  <i className="material-icons">home</i>Home</IndexLink>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/skills'}>
                  <i className="material-icons">equalizer</i>Skills</Link>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/timeline'}>
                  <i className="material-icons">timeline</i>Timeline</Link>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/conferences'}>
                  <i className="material-icons">language</i>Conferences</Link>
                </li>
                <li><Link className="mobile-menu" activeClassName={'active'} onClick={this.closeSideNav} to={'/blog'}>
                  <i className="material-icons">library_books</i>Blog</Link>
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