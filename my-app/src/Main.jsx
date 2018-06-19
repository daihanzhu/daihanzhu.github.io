import React, { Component } from 'react';
import Grid from './Grid.jsx'
import './Main.css';

import tileData from './TileData.json';

class Main extends Component {
  render() {
    /* Hacky way to turn JSON into an array of
      arrays to pass to the Grid */
    let items = [];
    for (var j in tileData) {
      var cur = [j];
      var item = tileData[j];
      for (var k in item) {
        cur.push(item[k]);
      }
      items.push(cur);
    }

    return (
      <div className="App">
        <h1 className="App-title">Welcome to Dana's shitty website</h1>
        <div className="content-card">
          <Grid itemCount={items.length} items={items}/>
          <div className="App-footer"></div>
        </div>
      </div>
    );
  }
}

export default Main;
