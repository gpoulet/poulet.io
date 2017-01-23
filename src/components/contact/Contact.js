import React from 'react';
import ContactItem from './ContactItem';
import {getContact} from '../../services/jsonServices';

export default class Contact extends React.Component {

  constructor() {
    super();
    this.state = {
      contact: []
    }
  }

  componentDidMount() {
    getContact(this.onSuccess, this.onError);
  }

  onSuccess = (result) => {
    console.log('onSuccess');
    console.log(result);
    this.setState({ contact: result.contact });
  };

  onError = (error) => {
    console.log('onError');
    console.log(error);
  };

  render() {
    return (
      <div className="container">
        <h2 className="header">Contact</h2>

        <div className="row">

          {this.state.contact.map((item, index) => <ContactItem key={index} {...item} />)}

        </div>


      </div>
    );
  }
}