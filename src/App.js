import React, { Component } from 'react';
import './App.css';
import LayOut from './components/Layout'
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{textAlign:'center',fontFamily:'Spectral, serif',fontStyle:'italic'}}>SHIFT DEMO</h1>
      <LayOut />
     </div>
    );
  }
}

export default App;