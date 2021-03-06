import React from 'react';
import {Link} from 'react-router';

const Footer = () => {

return (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l5 s12">
          <h5 className="white-text footer-logo">Gauthier POULET</h5>
          <div className="">
          <div className="grey-text text-lighten-4">
            <a className="grey-text text-lighten-3" href="https://maps.google.fr/maps?q=86000+Poitiers" target="_blank">
              <i className="material-icons footer-icons white-text">location_on</i> Poitiers, FRANCE</a>
          </div>
          <div className="grey-text text-lighten-4">
           <a className="grey-text text-lighten-3" href="tel:+33674959428">
             <i className="material-icons footer-icons white-text">phone</i> +33674959428</a>
          </div>
          <div className="grey-text text-lighten-4">
            <a className="grey-text text-lighten-3" href="mailto:gauthier.poulet@gmail.com">
              <i className="material-icons footer-icons white-text">email</i> gauthier.poulet@gmail.com</a>
          </div>
          </div>
          <p>
            <Link activeClassName={'active'} to={'/contact'} className="waves-effect waves-light btn contact-button">
              <i className="material-icons left">email</i>Contact
            </Link>
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
          <h5 className="white-text">Social networks</h5>
          <p>
            <a className="grey-text text-lighten-3" href="https://www.twitter.com/kikotte" target="_blank"><i className="fa fa-twitter footer-social-icons"/> Twitter</a><br/>
            <a className="grey-text text-lighten-3" href="https://www.github.com/gpoulet" target="_blank"><i className="fa fa-github footer-social-icons"/> Github</a><br/>
            <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/gpoulet" target="_blank"><i className="fa fa-linkedin footer-social-icons"/> LinkedIn</a><br/>
            <a className="grey-text text-lighten-3" href="http://www.viadeo.com/p/0021xaifkqvx1hj" target="_blank"><i className="fa fa-viadeo footer-social-icons"/> Viadeo</a></p>


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

