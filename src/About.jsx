import React, { Component } from 'react';
import './About.css';
import './ContentWrapper.css'

class About extends Component {
  constructor(props) {
    super(props)
    this._fetchImage = this._fetchImage.bind(this);
  }

  _fetchImage( name ) {
    return require( `./images/${name}` );
  }

  render() {
    return (
      <div className="about">
        <div className="about-text-block">
          <div className="list-column">
            <ol>
              <img src={require('./images/Cat1.png')} alt="Black cat" className="cat-pic"></img>
              <h1 className="cat-title">Cat #1</h1>
              <p>A sweetheart deep down. Will work for treats. Often found staring into other people’s garden while perched on the fence. Doesn't like you.</p>
            </ol>
          </div>
          <div className="list-column">
            <ol>
              <img src={require('./images/Florien.png')} alt="Gray cat" className="cat-pic"></img>
              <h1 className="cat-title">Florien</h1>
              <p>A purr machine! Likes to play fetch but will absolutly judge your throw. Oh, and keep an eye on your shoes, he might've puked in them...</p>
            </ol>
          </div>
          <div className="list-column">
            <ol>
              <img src={require('./images/SmallCat.png')} alt="Small Gray cat" className="cat-pic"></img>
              <h1 className="cat-title">Butter</h1>
              <p>A cat? Who knows. She is the fluffiest and very vocal about her needs. If you can’t find her, go look in a cupboard. Escape attempts: 25</p>
            </ol>
          </div>
        </div>
        <div className="clear-float"></div>
      </div>

    );
  }
}

export default About;
