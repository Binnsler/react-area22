import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Sound from './pages/Sound.js';
import Studio from './pages/Studio.js';
import Contact from './pages/Contact.js';

import{Router, Route, browserHistory, IndexRoute} from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/sound" component={Sound}/>
      <Route path="/studio" component={Studio}/>
    </Route>
  </Router>
), document.getElementById('app'));
