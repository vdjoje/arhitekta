import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Omeni  from './Omeni';
import Odideje  from './Usluge';
import Oaza from './Oaza';
import Kontakt from './Kontakt';


class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/omeni" component={Omeni} />
        <Route path="/odideje" component={Odideje} />
        <Route path="/oaza" component={Oaza} />
        <Route path="/kontakt" component={Kontakt} />
      </Switch>
    );
  }
}

export default Main;
