import React, {Component} from 'react';

class Home extends Component {

    render(){

      return (
          <div>
            <div className="home-splash"></div>
            <div className="home-splash-text-container">
            <img className="brain-logo" src="images/brain.jpg" alt=""/>
            <h3 className="home-splash-text">AREA 22: A community of artists, supporting the artistic community.</h3>
            <a className="white-button" href="#" role="button">Learn more &raquo;</a>
            </div>

          <div className="row offerings-container">
            <div className="col-1-3">
              <div className="professional-pic"></div>
              <div className="pad-20">
                <h2>{this.props.firstSegment}</h2>
                <p className="vert-pad-20">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <a className="black-button" href={this.props.link} role="button">Production</a>
              </div>
            </div>
            <div className="col-1-3">
              <div className="amateur-pic"></div>
              <div className="pad-20">
                <h2>{this.props.secondSegment}</h2>
                <p className="vert-pad-20">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                <a className="black-button" href="#" role="button">Development</a>
              </div>
           </div>
            <div className="col-1-3">
              <div className="kids-pic"></div>
              <div className="pad-20">
                <h2>{this.props.thirdSegment}</h2>
                <p className="vert-pad-20">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                <a className="black-button" href="#" role="button">Classes</a>
              </div>
            </div>
          </div>

          <div className="break-div"></div>
          <div className="artist-title absolute-center-children">
          <img className="artist-icon" src="http://rs268.pbsrc.com/albums/jj2/suar_bucket/Guitar.jpg~c200" alt=""/><h1>Artists</h1>
          </div>
          <p className="artist-text">Here are the artists who currently call Area 22 home. Click on their picture to view their profile.</p>
          <div className="row artist-container">
          <div className="col-1-3 absolute-center-children">
            <div className="artist bob"><h3>Bob Yen</h3><h3>Sound Engineering</h3></div>
          </div>
          <div className="col-1-3 absolute-center-children">
            <div className="artist andrew"><h3>Andrew Brown</h3><h3>Guitar</h3></div>
          </div>
          <div className="col-1-3 absolute-center-children">
            <div className="artist ginger"><h3>Ginger Rogers</h3><h3>Graphic Design</h3></div>
          </div>
          <div className="col-1-3 absolute-center-children">
            <div className="artist jeannie"><h3>Jeannie Hua</h3><h3>Painting</h3></div>
          </div>
          <div className="col-1-3 absolute-center-children">
            <div className="artist john"><h3>John Schweizer</h3><h3>Computer Engineering</h3></div>
          </div>
          <div className="col-1-3 absolute-center-children">
            <div className="artist sarah"><h3>Sarah Stone</h3><h3>Vocals</h3></div>
          </div>
          <div className="col-1-3 absolute-center-children">
            <div className="artist stephane"><h3>Stephane Midic</h3><h3>Vocals</h3></div>
          </div>
          <div className="col-1-3 absolute-center-children">
            <div className="artist raquel"><h3>Raquel Johnson</h3><h3>Piano</h3></div>
          </div>
          </div>
          <div className="break-div"></div>
        </div>
      )
    }

}

Home.propTypes = {
  firstSegment: React.PropTypes.string,
  secondSegment: React.PropTypes.string,
  thirdSegment: React.PropTypes.string,
  link: React.PropTypes.string
}

Home.defaultProps = {
  firstSegment: 'Professionals',
  secondSegment: 'Artists',
  thirdSegment: 'Kids',
  link: 'https://www.google.com'
}

export default Home
