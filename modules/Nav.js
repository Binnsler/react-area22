import React from 'react'
import NavLink from './Navlink.js';
import {IndexLink} from 'react-router';

export default React.createClass({
  render() {
    return (
    <div className="nav">
      <h1>React Router Tutorial</h1>
      <ul role="nav">
        <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/repos">Repos</NavLink></li>
      </ul>
    </div>
    )
  }
})
