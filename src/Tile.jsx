import React, { Component } from 'react';
import './Tile.css';

import Views from './Views.js'

class Tile extends Component {
  handleClick = () => {
    if ( !Views[this.props.page] ) return;
    const tileImg = document.getElementById(this.getImgId());
    const coords = tileImg.getBoundingClientRect();
    const tileInfo = {top: coords.y, left: coords.x, img: this.props.image}

    this.props.switchView( Views[this.props.page], tileInfo );
  }

  getImgId = () => {
    return 'ID_' + this.props.image;
  }

  render() {
    const overlay = this.props.overlaytext ? ( <div className="overlay">
        <div className="overlay-text">
          {this.props.overlaytext}
          <div className="overlay-subtext">{this.props.overlaySubtext}</div>
        </div>
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
        <img id={this.getImgId()} src={this.props.image} alt={this.props.altText} className="tile-bgd" />
        <div className="tile-bottom">
          <div className="tile-text-box">
            {this.props.header && <div style={headerStyle} className="tile-header-text">{this.props.header}</div>}
            <h1 className="tile-title">{this.props.title}</h1>
            <h1 className="tile-desc">{this.props.desc}</h1>
          </div>
        </div>
        { overlay }
      </div>
    );
  }
}

export default Tile;
