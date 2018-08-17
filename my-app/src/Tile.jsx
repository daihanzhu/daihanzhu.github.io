import React, { Component } from 'react';
import './Tile.css';

class Tile extends Component {
  render() {
    const overlay = this.props.overlaytext ? ( <div className="overlay">
        <div className="overlay-text">{this.props.overlaytext}</div>
    </div> ) : null;

    return (
      <div className="tile">
        <img src={this.props.image} alt={this.props.altText} className="tile-bgd"></img>
        <div className="tile-bottom">
          <div className="tile-text-box">
            <div className="tile-header-text">{this.props.header}</div>
            <div className="tile-title">{this.props.title}</div>
            <div className="tile-desc">{this.props.desc}</div>
          </div>
        </div>
        { overlay }
      </div>
    );
  }
}

export default Tile;
