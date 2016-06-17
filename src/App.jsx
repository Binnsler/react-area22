import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      page: 'home',
    }
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
