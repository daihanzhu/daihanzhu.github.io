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
    /*let rightAligned = false;

    const blocks = aboutData.map((item) =>
        <AboutBlock
          key={item.title}
          title={item.title}
          desc={item.description}
          image={item.image ? this._fetchImage(item.image) : null}
          altText={item.image}
          rightAligned={ rightAligned = !rightAligned }
        />
    );*/

    return (
      <div className="about">
        <div className="content-wrapper">
          <div className="shape-container">
            <div className="sparkle"></div>
            <div className="daihan-who"></div>
          </div>
          <div className="daihan-caption">
            <h1>Let’s be friends</h1>

            <p className="daihan-desc">I’ll start. My name is Daihan, and I design software people like to use.
<br/><br/>
In the past, I’ve lived on 3 continents (North America, Europe, Asia), been an alphabetizer of books, 4th place winning curler, and guilty of over-filtering my online self.
<br/><br/>
In the future, I plan on illustrating a children’s book, grow an avocado tree, and ride horses into the sunset.
<br/><br/>
For the time being, I make a lot of mistakes and I’m overly curious about everything around me.

          </p>
          </div>
          <div className="clear-float"></div>
          <div className="about-text-block">
            <h1 className="about-section-header">Say hello to my cats</h1>
            <div className="list-column">
              <ol>
                <img src={require('./images/Cat1.png')} alt="Black cat" className="cat-pic"></img>
                <h2>Cat #1</h2>
                <p>A sweetheart deep down. Will work for treats. Often found staring into other people’s garden while perched on the fence. Doesn't like you.</p>
              </ol>
            </div>
            <div className="list-column">
              <ol>
                <img src={require('./images/Florien.png')} alt="Gray cat" className="cat-pic"></img>
                <h2>Florien</h2>
                <p>A purr machine! Likes to play fetch but will absolutly judge your throw. Oh, and keep an eye on your shoes, he might've puked in them...</p>
              </ol>
            </div>
            <div className="list-column">
              <ol>
                <img src={require('./images/SmallCat.png')} alt="Small Gray cat" className="cat-pic"></img>
                <h2>Smol Cat</h2>
                <p>A cat? Who knows. She is the fluffiest and very vocal about her needs. If you can’t find her, go look in a cupboard. Escape attempts: 25</p>
              </ol>
            </div>
          </div>
          <div className="clear-float"></div>
        </div>
      </div>

    );
  }
}

export default About;
