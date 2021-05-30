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
        <div className="about-block">
          <div className="about-caption">
            <h1>Meet my Cats &lt;3</h1>
            <h2>Cat #1</h2>
            <p className="about-desc">A sweetheart deepdown. Will do anything for treats. Often found staring into other people’s homes while perched on the fence. Doesn’t like you.
            </p>
            <h2>Florien</h2>
            <p className="about-desc">A purr machine! Likes to play fetch but will absolutly judge your throw. Oh, and keep an eye on your shoe he might’ve puked in it...
            </p>
            <h2>Butter</h2>
            <p className="about-desc">A cat? Who really knows. She is buttery soft and very vocal about her needs. If you can’t find her go look in cardboard boxes.
              <br/><br/>
              Escape attempts: 25
            </p>
          </div>
          <img src={require('./images/3cats.png')} alt='All 3 of my cats.' className='three-cats'>
          </img>
        </div>
        <div className="about-block">
          <img src={require('./images/westjet.png')} alt='Westjet Connect app.' className='westjet'>
          </img>
          <div className="about-caption">
            <h1>Writing</h1>
            <p className="about-desc">Occationally, I write about UX and learnings along the way.
              <br/><br/>
              <a href="https://uxdesign.cc/westjet-connect-a-ux-case-study-2c15b1888bf5" rel="noopener noreferrer" target="_blank">
                Westjet Connect - A UX Case Study
              </a>
              <br/>
              <a href="https://medium.com/@daihan/flixbus-take-a-ride-through-customer-experience-design-d15d744461f8" rel="noopener noreferrer" target="_blank">
                Flixbus — Take a Ride Through Customer Experience Design
              </a>
              <br/>More on&nbsp;
              <a href="https://medium.com/@daihan" rel="noopener noreferrer" target="_blank">
                medium.com/@daihan
              </a>
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default About;
