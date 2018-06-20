import React, { Component } from 'react';
import Grid from './Grid.jsx'
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Dana's shitty website</h1>
        <div className="content-card">
          <Grid/>
          <div className="App-footer"></div>
        </div>
      </div>
    );
  }
}

export default Main;
