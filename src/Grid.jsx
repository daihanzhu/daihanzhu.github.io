import React, { Component } from 'react';
import withSizes from 'react-sizes'

import Tile from './Tile.jsx'
import './Grid.css';

import tileData from './TileData.json';

class Grid extends Component {
  constructor(props) {
    super(props)
    this._fetchImage = this._fetchImage.bind(this);
    this._switchToAbout = this._switchToAbout.bind(this);
  }

  _switchToAbout() {
    this.props.switchToAbout();
  }

  _fetchImage( name ) {
    return require( `./images/${name}` );
  }

  render() {
    let numTiles = 0;
    let tiles = tileData.map((item) =>
        <Tile
          key={numTiles++}
          header={item.header}
          title={item.title}
          desc={item.description}
          image={item.image ? this._fetchImage(item.image) : null}
          altText={item.image}
          overlaytext={item.overlaytext}
          page={item.view}
          switchView={this.props.switchView}
        />
    );

    /* Hard-coded sh*t to hide some tiles for now */
    tiles = tiles.slice(0,3);
    numTiles = tiles.length;

    const numColumns = Math.min(this.props.tileFit, numTiles);
    /* Extra check to ensure only 3 columns are ever shown */
    const numColumns2 = Math.min(numColumns, 3);

    if (numColumns < 2) {
      tiles = tiles.reverse();
    }

    const gridStyle = {
      gridTemplateColumns: "350px ".repeat(numColumns2)
    };

    const backdropStyle = {
      height: this.props.height
    };

    return (
      <div className="grid-view">
        <div
          className='front-page-backdrop'
          style ={backdropStyle}
        >
          <div className="content-wrapper">
            <a className="email-link" href="mailto:daihanzhu@gmail.com?subject=Let's work together!">
              daihanzhu@gmail.com
            </a>
            {/*<img src={require('./images/landing-foreground.png')} alt="Let's Work Together" className='intro-title'>
            </img>*/}
            <button onClick={this._switchToAbout} className="about-link">
              My story +
            </button>
          </div>
        </div>
        <div className='grid-wrapper'>
          <div
            className="grid-container"
            style={gridStyle}
          >
            {tiles}
          </div>
          <div className="grid-wrapper-bottom"></div>
        </div>
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  tileFit: (width - 50) / (350 + 50)
})

export default withSizes(mapSizesToProps)(Grid);
