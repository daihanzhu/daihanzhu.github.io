import React, { Component } from 'react';
import withSizes from 'react-sizes'

import Tile from './Tile.jsx'
import './Grid.css';

import tileData from './TileData.json';

class Grid extends Component {
  constructor(props) {
    super(props)
    this._fetchImage = this._fetchImage.bind(this);
  }

  _fetchImage( name ) {
    return require( `./images/${name}` );
  }

  render() {
    let numTiles = 0;
    const filteredTileData = tileData.filter(t => t.visible === 1)
    let tiles = filteredTileData.map((item) =>
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

    const numColumns = Math.min(this.props.tileFit, numTiles);
    /* Extra check to ensure only 2 columns are ever shown */
    const numColumns2 = Math.min(numColumns, 2);

    const gridStyle = {
      gridTemplateColumns: "400px ".repeat(numColumns2)
    };

    return (
      <div className="grid-view" id="tile-grid">
        <div className='grid-wrapper'>
          <div
            className="grid-container"
            style={gridStyle}
          >
            {tiles}
          </div>
        </div>
      </div>
    );
  }
}

const mapSizesToProps = ({ width }) => ({
  tileFit: (width - 50) / (350 + 50)
})

export default withSizes(mapSizesToProps)(Grid);
