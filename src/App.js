import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Eventmenu from './components/Eventmenu';
import Topbar from './components/Topbar'

class App extends Component {
  render() {
    return (
      <div className="main">
          <Topbar />
          <Main />
          <Eventmenu />
      </div>
    );
  }
}

export default App;
