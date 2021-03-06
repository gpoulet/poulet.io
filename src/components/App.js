import React from 'react';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './Layout';
import Home from './Home';
import Skills from './skills/Skills';
import Timeline from './timeline/Timeline';
import Conferences from './conferences/Conferences';
import Blog from './Blog';
import Contact from './contact/Contact';
import NotFound from './NotFound';

const App = () => {

  return (
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}/>
        <Route path="/" component={Home}/>
        <Route path="skills" component={Skills}/>
        <Route path="timeline" component={Timeline}/>
        <Route path="conferences" component={Conferences}/>
        <Route path="blog" component={Blog}/>
        <Route path="contact" component={Contact}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  );

};

export default App;

