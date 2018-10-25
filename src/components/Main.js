import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Omeni  from './Omeni';
import Odideje  from './Usluge';
import Kontakt from './Kontakt';
import Oaza from './Oaza';
import Ambasada from './Ambasada';
import Atlas from './Atlas';
import Benexfitnes from './Benexfitnes';
import Bogdanov from './Bogdanov';
import Vila from './Vila';
import Planinski from './Planinski';
import StambeniCetinje from './StambeniCetinje';
import Slidertest from './Slidetest';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/omeni" component={Omeni} />
        <Route path="/odideje" component={Odideje} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/oaza" component={Oaza} />
        <Route path="/ambasada" component={Ambasada} />
        <Route path="/atlas" component={Atlas} />
        <Route path="/benexfitnes" component={Benexfitnes} />
        <Route path="/bogdanov" component={Bogdanov} />
        <Route path="/vila" component={Vila} />
        <Route path="/planinski" component={Planinski} />
        <Route path="/stambenicetinje" component={StambeniCetinje} />
        <Route path="/slidertest" component={Slidertest} />
      </Switch>
    );
  }
}

export default Main;
