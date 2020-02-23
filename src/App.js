import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'

import { Home } from './components/Home'
import Navigation from './components/Navigation'
import { NotFound } from './components/NotFound';
import { Profesional } from './components/profesional';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'



class App extends Component {
  render(){
    return (
      <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profesionales' component={Profesional} />
            <Route component={NotFound}/>
          </Switch>
      </div>
    );
}
}

export default App;
