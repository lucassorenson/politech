import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import Home from './home/HomeContainer';
import Results from './results/ResultsContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/home'   component={Home}/>
          <Route path='/results'   component={Results}/>
        </div>
      </Router>
    );
  }
}

export default App;