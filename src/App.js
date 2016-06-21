import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class App extends Component {

  componentDidMount(){
    console.log('App successfully mounted to div#app.')
  }

  render(){

    return (

      <div>
        <Navbar/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default App
