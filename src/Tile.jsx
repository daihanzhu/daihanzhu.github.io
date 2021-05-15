import React, { Component } from 'react';
import './Tile.css';

import Views from './Views.js'

class Tile extends Component {
  handleClick = () => {
    if ( !Views[this.props.page] ) return;
    this.props.switchView( Views[this.props.page] );
  }

  render() {
    const overlay = this.props.overlaytext ? ( <div className="overlay">
        <div className="overlay-text">{this.props.overlaytext}</div>
    </div> ) : null;

    let headerBgColor = '#FFE6DC';
    if (this.props.header === 'Brand Design') {
      headerBgColor = '#DCE6FF';
    } else if (this.props.header === 'Illustration') {
      headerBgColor = '#FFF8C2';
    }

    const headerStyle = {backgroundColor: headerBgColor};

    return (
      <div className="tile" onClick={this.handleClick}>
        <img src={this.props.image} alt={this.props.altText} className="tile-bgd"></img>
        <div className="tile-bottom">
          <div className="tile-text-box">
            <div style={headerStyle} className="tile-header-text">{this.props.header}</div>
            <h2 className="tile-title">{this.props.title}</h2>
            <div className="tile-desc">{this.props.desc}</div>
          </div>
        </div>
        { overlay }
      </div>
    );
  }
}

export default Tile;
