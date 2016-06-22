import React, {Component} from 'react';

class Studio extends Component {
  render() {
    return (
      <div>
        <div className="about-header"></div>
        <div className="about-text">
          <div>
            <h3 className="about-title">Area Twenty-Two</h3>
            <p className="about-paragraph inline">is a production studio based in Plymouth, MA. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <p className="pad-top-20 about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}


Studio.propTypes = {
  firstTitle: React.PropTypes.string,
  firstText: React.PropTypes.string,
  firstButton: React.PropTypes.string,

  secondTitle: React.PropTypes.string,
  secondText: React.PropTypes.string,
  secondButton: React.PropTypes.string,

  thirdTitle: React.PropTypes.string,
  thirdText: React.PropTypes.string,
  thirdButton: React.PropTypes.string,
}

Studio.defaultProps = {
  firstTitle: 'Professional Studio',
  firstText: 'At our core, Area Twenty-Two is a production studio that specializes in AniDigi sound.',
  firstButton: 'Professionals',

  secondTitle: 'Professionals',
  secondText: 'Professionals',
  secondButton: 'Professionals',

  thirdTitle: 'Professionals',
  thirdText: 'Professionals',
  thirdButton: 'Professionals',
}

export default Studio
