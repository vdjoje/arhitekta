import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from './Register'
import Login from './Login'
import Clubs from './Clubs'
import Clubspage from './Clubspage'

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/clubs" component={Clubs} />
        <Route path="/clubpage" component={Clubspage} />
      </Switch>
    );
  }
}

export default Main;
