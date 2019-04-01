import React, { Component } from 'react';
import Game from './components/Game';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}
