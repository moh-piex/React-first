import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/index'
import Index from './Components/index/index'

import Contact from './Components/Contact/index'


class App extends Component {
 render(){
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar />
    <Route exact path='/' component={Index} />
    <Route path='/contact' component={Contact}/>
    </BrowserRouter>
   
    </div>
  );
 }
}

export default App;
