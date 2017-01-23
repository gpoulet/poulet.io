import React from 'react';

const ContactItem = (props) => {
    return (
          <div className="col s12 m4">
            <a href={props.url} target="_blank">
              <div className="center promo promo-example">
                <i className={props.logo + ' fa contact-logo'} aria-hidden="true"/>
                <h5 className="contact-title">{props.name}</h5>
                <p className="light center black-text">{props.content}</p>
              </div>
            </a>
          </div>
    );
};

ContactItem.propTypes = {
  url: React.PropTypes.string.isRequired,
  logo: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired
};

export default ContactItem;