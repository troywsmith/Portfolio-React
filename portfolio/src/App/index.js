import React, { Component } from "react";
import "../style.css";

//components
import Sidebar from '../Sidebar'
import Main from '../Main'

class App extends Component {
  render() {
    return (
    
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  
    )
  }
}

export default App;
