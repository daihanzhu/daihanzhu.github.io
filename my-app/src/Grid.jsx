import React, { Component } from 'react';
import Tile from './Tile.jsx'
import './Grid.css';

import tileData from './TileData.json';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this)

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

  render() {
    let numTiles = 0;
    const tiles = tileData.map((item) =>
        <Tile key={numTiles++} header={item.header} title={item.title} desc={item.description}/>
    );

    const tileFit = (this.state.width - 50) / (350 + 50);
    const numColumns = Math.min(tileFit, numTiles);
    const numColumns2 = Math.min(numColumns, 3);

    const gridStyle ={
      gridTemplateColumns: "350px ".repeat(numColumns2)
    };


    return (
      <div
        className="grid-container"
        style={gridStyle}
        ref={ (divElement) => this.divElement = divElement}
      >
        {tiles}
      </div>
    );
  }
}

export default Grid;
