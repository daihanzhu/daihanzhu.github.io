import React, { Component } from 'react';
import Tile from './Tile.jsx'
import './Grid.css';

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
    const tiles = this.props.items.map((item) =>
        <Tile key={item[0]} header={item[1]} title={item[2]} description={item[3]}/>
    );

    const tileFit = (this.state.width - 50) / (235 + 50);
    const numColumns = Math.min(tileFit, this.props.itemCount)

    const gridStyle ={
      gridTemplateColumns: "auto ".repeat(numColumns)
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
