import React, { Component } from 'react';
import withSizes from 'react-sizes'

import Tile from './Tile.jsx'
import './Grid.css';

import importedTileData from './TileData.json';

class Grid extends Component {
  _fetchImage = (name) => {
    return require( `./images/${name}` );
  }

  render() {
    const tileData = this.props.tileData || importedTileData;

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
          overlaySubtext={item.overlaySubtext}
          page={item.view}
          switchView={this.props.switchView}
        />
    );

    /* Ensure only 2 columns are ever shown */
    const numColumns = Math.max(1, Math.min(this.props.tileFit, 2));
    const columnSize = Math.min(400, this.props.width - 100);

    const gridStyle = {
      gridTemplateColumns: `${columnSize}px `.repeat(numColumns)
    };

    return (
      <div className="grid-view" id="tile-grid">
        <div className='grid-wrapper'>
          {this.props.heading
            && <div className="grid-heading"><p className="grid-heading-content">{this.props.heading}</p></div>}
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
  tileFit: (width - 50) / (400 + 50),
  width: width
})

export default withSizes(mapSizesToProps)(Grid);
