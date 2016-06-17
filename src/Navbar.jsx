import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Navbar extends Component {

  render(){

    var homeActive = '',
    studioActive = '',
    soundActive = '',
    aboutActive = '',
    contactActive = '',
    page = this.props.page;

    if(page == 'studio'){
      studioActive = 'active-nav'
    }

    else if(page == 'sound'){
      soundActive =  'active-nav'
    }

    else if(page == 'about'){
      aboutActive = 'active-nav'
    }

    else if(page == 'contact'){
      contactActive = 'active-nav'
    }

    return(
      <div>
        <nav className="navbar">
          <div className="nav-container absolute-center-children">
            <ul className="left-nav">
              <li className="nav-links"><a onClick={this.props.studioClick} className={studioActive}>Studio</a></li>
              <li className="nav-links"><a onClick={this.props.soundClick} className={soundActive}>Sound</a></li>
            </ul>
            <img className="nav-logo" onClick={this.props.homeClick} src="http://fantlab.ru/images/users/41000_3" alt=""/>
            <ul className="right-nav">
              <li className="nav-links"><a onClick={this.props.aboutClick} className={aboutActive}>About</a></li>
              <li className="nav-links"><a onClick={this.props.contactClick} className={contactActive}>Contact</a></li>
            </ul>
          </div>
          <div className="header-spacer"></div>
        </nav>
      </div>
    )
  }

}

export default Navbar
