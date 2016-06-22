import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import Sound from './modules/Sound';
import About from './modules/About';
import Studio from './modules/Studio';

import{Router, Route, browserHistory, IndexRoute} from 'react-router';
import Home from './modules/Home';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/sound" component={Sound}/>
      <Route path="/studio" component={Studio}/>
    </Route>
  </Router>
), document.getElementById('app'))
