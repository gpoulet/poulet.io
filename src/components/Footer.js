import React from 'react';
import {Link} from 'react-router';

const Footer = () => {

return (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l5 s12">
          <h5 className="white-text">Gauthier Poulet</h5>
          <p className="grey-text text-lighten-4">Poitiers, FRANCE</p>
          <p className="grey-text text-lighten-4"><a className="grey-text text-lighten-3" href="tel:+33674959428">Phone : +33674959428</a>
            <br/><a className="grey-text text-lighten-3" href="mailto:gauthier.poulet@gmail.com">E-mail : gauthier.poulet@gmail.com</a></p>
          <p>
            <Link activeClassName={'active'} to={'/contact'} className="waves-effect waves-light btn contact-button"><i className="material-icons left">email</i>Contact</Link>
          </p>
        </div>

        <div className="col l4 s12">
          <h5 className="white-text">Site map</h5>
          <p>
            <Link className="grey-text text-lighten-3" to={'/'}>Home</Link><br/>
            <Link className="grey-text text-lighten-3" to={'/skills'}>Skills</Link><br/>
            <Link className="grey-text text-lighten-3" to={'/timeline'}>Timeline</Link><br/>
            <Link className="grey-text text-lighten-3" to={'/conferences'}>Conferences</Link><br/>
            <Link className="grey-text text-lighten-3" to={'/blog'}>Blog</Link><br/>
            <Link className="grey-text text-lighten-3" to={'/contact'}>Contact</Link><br/>
          </p>
        </div>

        <div className="col l3 s12">
          <h5 className="white-text">Social Networks</h5>
          <p><a className="grey-text text-lighten-3 waves-effect waves-light btn twitter-button" href="https://www.twitter.com/gpoulet" target="_blank"><i className="material-icons left">repeat</i>Twitter</a></p>
          <p><a className="grey-text text-lighten-3 waves-effect waves-light btn github-button" href="https://www.github.com/gpoulet" target="_blank"><i className="material-icons left">star</i>Github</a></p>
          <p><a className="grey-text text-lighten-3 waves-effect waves-light btn linkedin-button" href="https://www.linkedin.com/in/gpoulet" target="_blank"><i className="material-icons left">face</i>LinkedIn</a></p>


        </div>

      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        © 2016-{new Date().getFullYear()} Gauthier POULET
      </div>
    </div>
  </footer>
  );

}

export default Footer;

