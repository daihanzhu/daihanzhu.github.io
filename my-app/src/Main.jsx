import React, { Component } from 'react';
import Grid from './Grid.jsx'
import './Main.css';

class Main extends Component {
  render() {
    const items = ['1','2','3','4'];

    return (
      <div className="App">
        <h1 className="App-title">Welcome to Dana's shitty website</h1>
        <div className="content-card">
          <Grid itemCount='4' items={items}/>
          <div className="App-footer"></div>
        </div>
      </div>
    );
  }
}

export default Main;
