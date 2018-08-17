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
          <p className="daihan-desc">Oh hi, that’s me. My name is pronounced like Diane, but at cafes I’ve been called Dana, Danny, and sometimes Diana, I like them all.<br/>
          <br/> 
          Aside from being a designer (I assum you got that by now), I’m an occational cat-sitter, writter, and entrepreneur. In the past, I’ve been a production assistant, camp counsoler, and guity of over-filtering my instagram photos. In the future, I hope to work on an avocado farm.<br/>
          <br/>
          For the time being, I’m loving the freedom of being a freelancer with comfort of the creative unknown. 
        </p>
        </div>
        <div className="clear-float"></div>
        {blocks}
      </div>
    );
  }
}

export default About;
