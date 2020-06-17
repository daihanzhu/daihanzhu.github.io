import React, { Component } from 'react';
import './About.css';
import './ContentWrapper.css'
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
    let rightAligned = false;

    const blocks = aboutData.map((item) =>
        <AboutBlock
          key={item.title}
          title={item.title}
          desc={item.description}
          image={item.image ? this._fetchImage(item.image) : null}
          altText={item.image}
          rightAligned={ rightAligned = !rightAligned }
        />
    );

    return (
      <div className="about">
        <div className="content-wrapper">
          <div className="shape-container">
            <div className="sparkle"></div>
            <div className="daihan-who"></div>
          </div>
          <div className="daihan-caption">
            <h1>Who I am</h1>
            <br/>
            <p className="daihan-desc">Aside from being a designer (I hope you got that by now), I’m an occasional cat-sitter, writer, and entrepreneur. In the past, I’ve been a book shelver, curler, and guilty of over-filtering my Instagram photos. In the future, I would like to grow my own avocados.<br/>
            <br/>
            For the time being, I make a lot of mistakes and I’m overly curious about everything around me.<br/>
          </p>
          </div>
          <div className="clear-float"></div>
          {/*{blocks}*/}
          <div className="about-text-block">
            <h1 className="about-section-header">Meet my cats</h1> 
            <div className="list-column">
              <ol>
                <img src={require('./images/Cat1.png')} alt="Black cat" className="cat-pic"></img>
                <h2>Cat #1</h2>
                He likes eating
              </ol>
            </div>
            <div className="list-column">
              <ol>
                <img src={require('./images/Florien.png')} alt="Gray cat" className="cat-pic"></img>
                <h2>Florien</h2>
                He likes petting
              </ol>
            </div>
            <div className="list-column">
              <ol>
                <img src={require('./images/SmallCat.png')} alt="Small Gray cat" className="cat-pic"></img>
                <h2>Small cat</h2>
                She likes hiding
              </ol>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default About;
