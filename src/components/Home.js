import React, { Component } from 'react';
import Cards from './Cards';

const styles = {
    
    display:"flex",
    flexDirection:"column",
    alignItems: "center"
};

class Home extends Component {
  render() {
    return (
        <div style={styles}>
          <br />
          <br />
          <Cards />
          <Cards />
          <Cards />
        </div>
    );
  }
}

export default Home;
