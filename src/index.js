import $ from 'jquery';
window.$ = $;
window.jQuery = $;

import React from 'react';
import ReactDOM from 'react-dom';

window.Vel = require('materialize-css/js/velocity.min');

import '../node_modules/materialize-css/dist/js/materialize.min';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import './index.css';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
