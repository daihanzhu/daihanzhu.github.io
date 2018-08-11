import React, { Component } from 'react';
import './About.css';
import AboutBlock from './AboutBlock.jsx'

import aboutData from './AboutData.json';

class About extends Component {
  constructor(props) {
    super(props)
    this._fetchImage = this._fetchImage.bind(this);
  }

  _fetchImage( name ) {
    return require( `./images/${name}` );
  }

  render() {
    const blocks = aboutData.map((item) =>
        <AboutBlock
          key={item.title}
          title={item.title}
          desc={item.description}
          image={item.image ? this._fetchImage(item.image) : null}
          altText={item.image}
        />
    );

    return (
      <div className="about-wrapper">
        <div className="shape-container">
          <div className="rectangle"></div>
          <div className="daihan-who"></div>
        </div>
        <div className="daihan-caption">
          <h1>Who tf is Faihan</h1>
          <p className="daihan-desc">About Me: I am from Albert(Hein)a lorem ipsum...</p>
        </div>
        <div className="clear-float"></div>
        {blocks}
      </div>
    );
  }
}

export default About;
