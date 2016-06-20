import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Sound from './pages/Sound.jsx';
import Studio from './pages/Studio.jsx';
import Contact from './pages/Contact.jsx';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 'home'
    }

    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleStudioClick = this.handleStudioClick.bind(this);
    this.handleSoundClick = this.handleSoundClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleHomeClick(){
    this.setState({
      page: 'home'
    })
  }

  handleStudioClick(){
    this.setState({
      page: 'studio'
    })
  }

  handleSoundClick(){
    this.setState({
      page: 'sound'
    })
  }

  handleAboutClick(){
    this.setState({
      page: 'about'
    })
  }

  handleContactClick(){
    this.setState({
      page: 'contact'
    })
  }

  componentDidMount(){

  }

  render(){
    if(this.state.page == 'home'){
      var page = <Home/>
    }

    if(this.state.page == 'about'){
      var page = <About/>
    }

    if(this.state.page == 'sound'){
      var page = <Sound/>
    }

    if(this.state.page == 'studio'){
      var page = <Studio/>
    }

    if(this.state.page == 'contact'){
      var page = <Contact/>
    }

    return (

      <div>
        < Navbar
          page = {this.state.page}
          homeClick = {this.handleHomeClick}
          studioClick = {this.handleStudioClick}
          soundClick = {this.handleSoundClick}
          aboutClick = {this.handleAboutClick}
          contactClick = {this.handleContactClick}
        />
        {page}
        < Footer />
      </div>
    )
  }
}

export default App
