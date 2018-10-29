import React, { Component } from 'react';
import Tile from './Tile.jsx'
import './Grid.css';

import tileData from './TileData.json';

class Grid extends Component {
  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this);
    this._fetchImage = this._fetchImage.bind(this);
    this._switchToAbout = this._switchToAbout.bind(this);

    this.state = {
      width: 0
    }
  }

  updateDimensions() {
      const width = window.innerWidth;
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

  _switchToAbout() {
    this.props.switchView();
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

    const gridStyle = {
      gridTemplateColumns: "350px ".repeat(numColumns2)
    };

    const clientWidth = this.state.width;

    const backdropStyle = {
      height: clientWidth > 768 ? clientWidth * 0.39 : clientWidth * 0.9
    };

    return (
      <div className="grid-view">
        <div
          className='front-page-backdrop'
          style ={backdropStyle}
        >
          <div className="content-wrapper">
            <div className="intro-box">
              <a className="email-link" href="mailto:daihanzhu@gmail.com?subject=Let's work together!">
                daihanzhu@gmail.com
              </a>
              <h1 className='intro-title'>
                Hi, my name is Daihan.
                <br/>I’m a designer, illustrator, and future adult.
                <br/>Let’s not take things too seriously.
              </h1>
            </div>
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

export default Grid;
