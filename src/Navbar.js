import React, {Component} from 'react';
import NavLink from './NavLink.js';

class Navbar extends Component {

  render(){
    return(
      <div>
        <nav className="navbar">
          <div className="nav-container absolute-center-children">
            <ul className="left-nav" role="nav">
              <li className="nav-links"><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
              <li className="nav-links"><NavLink to="/studio">Studio</NavLink></li>
            </ul>
            <img className="nav-logo" src="http://fantlab.ru/images/users/41000_3" alt=""/>
            <ul className="right-nav" role="nav">
              <li className="nav-links"><NavLink to="/sound">Sound</NavLink></li>
              <li className="nav-links"><a href="https://google.com">Contact</a></li>
            </ul>
          </div>
          <div className="header-spacer mobile-only"></div>
        </nav>
      </div>
    )
  }

}

export default Navbar
