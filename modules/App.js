import React from 'react';
import NavLink from './Navlink.js';
import {IndexLink} from 'react-router';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

export default React.createClass({
  render() {
    return(
      <div>
        <Navbar/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})
