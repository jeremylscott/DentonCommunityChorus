import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import route from './route'


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {route}
        </div>
      </Router>
    );
  }
}