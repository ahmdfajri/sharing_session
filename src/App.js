import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'

class App extends Component {
  render (){
    // var tes = 'halo'
    // var style = {
    //   color: 'red'
    // } 
    return(
      <div>
      {/* <h1 className="style">{tes}</h1>
      <h1 style={{color:'blue'}}>{tes}</h1>
      <h1 style={style}>{tes}</h1> */}
      <Header/>
      <Footer/>
      </div>
    )
    }
}

export default App;
