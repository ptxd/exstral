import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './HOCs/home';
import Start from './HOCs/start';

import './scss/normalize.css';
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/start" component={Start}></Route>  
      </Switch>
    );
  }
}

export default App;
