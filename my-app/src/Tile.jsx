import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
  render() {
    return (
      <div className="tile">
        <div className="tile-bottom">
          <div className="tile-header-text">UX + Research</div>
          <div className="tile-title">WestJet Connect</div>
          <div className="tile-desc">A user research case study</div>
        </div>
      </div>
    );
  }
}

export default Tile;
