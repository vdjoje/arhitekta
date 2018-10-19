import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Topbar from './components/Topbar'

class App extends Component {
  render() {
    return (
      <div className="main">
          <Topbar />
          <Main />
          
      </div>
    );
  }
}

export default App;
