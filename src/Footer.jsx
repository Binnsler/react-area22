import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {

  constructor(props){
    super(props);

    this.state = {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      youtube: "https://www.youtube.com",
    }
  }

  render(){
    return(
      <div>
      <br/>
      <footer>
        <div className="contact-container">
          <h1 className="vert-pad-20">Please send us a message if you are interested in any of our services or just want to connect.</h1>
          <input type="text" className="email-input" placeholder="Email Address"/>
          <input type="text" className="email-input" placeholder="Confirm Email"/>
          <textarea type="text" className="email-input feedback" placeholder="What is your question?"></textarea>
          <a className="black-button" href="#" role="button">Submit &raquo;</a>
        </div>
        <div className="absolute-center-children footer">
          <a href={this.props.facebook}><div className="social-icon facebook"><img src="images/facebook.png" alt=""/></div></a>
          <a href={this.props.twitter}><div className="social-icon twitter"><img src="images/twitter.png" alt=""/></div></a>
          <a href={this.props.youtube}><div className="social-icon youtube"><img src="images/youtube.png" alt=""/></div></a>
        </div>
      </footer>
      </div>
    )
  }

}

export default Footer
