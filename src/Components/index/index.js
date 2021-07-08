import React,{Component} from 'react'

import About from '../About/index'
import Work from '../Work/index'
import Home from '../Home/index'

import Footer from '../Footer/index'
import Portfolio from '../Portfolio/index'
import Profile from '../Profile/index'
import Socailmedia from '../Socailmedia/index'

class Index extends Component {
 render(){
  return (
    <div className="App">

  
    <Home />
    <Work />
    
    <Profile />
    <Portfolio />
    <About />
    <Socailmedia />
    <Footer />
    </div>
  );
 }
}

export default Index;