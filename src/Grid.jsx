import React, { Component } from 'react';
import Tile from './Tile.jsx'
import './Grid.css';

import tileData from './TileData.json';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this);
    this._fetchImage = this._fetchImage.bind(this);

    this.state = {
      width: 0
    }
  }

  updateDimensions() {
      if (!this.divElement) return;
      const width = this.divElement.clientWidth;
      this.setState({ width });
  }
  componentWillMount() {
      this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
      this.updateDimensions()
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }

  _fetchImage( name ) {
    return require( `./images/${name}` );
  }

  // TODO: Make this less hacky so we don't need to re-render on every resize
  //  --> Media Queries?
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
    tiles.splice(2,1);
    tiles.splice(3,2);
    const b = tiles[2];
    tiles[2] = tiles[1];
    tiles[1] = b;
    numTiles = 3;
    /* TODO: Get rid of all of this */

    const tileFit = (this.state.width - 50) / (350 + 50);
    const numColumns = Math.min(tileFit, numTiles);
    const numColumns2 = Math.min(numColumns, 3);

    const gridStyle ={
      gridTemplateColumns: "350px ".repeat(numColumns2)
    };

    return (
      <div className="grid-view">
        <div className='content-wrapper'>
          <h1 className='intro-title'>
            Designer + illustrator
          </h1>
          <h2 className="intro-text">
            👋 Oh hi, if you are looking for Dana's shitty website, you've come to the right place.
          </h2>
        </div>
        <div className='grid-wrapper'>
          <div
            className="grid-container"
            style={gridStyle}
            ref={ (divElement) => this.divElement = divElement}
          >
            {tiles}
          </div>
          <div className="grid-wrapper-bottom"></div>
        </div>
      </div>
    );
  }
}

export default Grid;
