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
        <div className="about-block block-A">
          <div className="about-caption">
            <h1>Things I Love</h1>
            <p className="about-desc">
              My cats. Taking pics of my cats. Books. Well-named layers. A really full cup of coffee. Food, ugly food, ice cream! Spending time alone and jetting off someplace new.
            </p>
          </div>
          <div className="about-caption">
            <h1>Things I Care About</h1>
            <p className="about-desc">
              Kindness. Being kind to our planet and each other. Subtitle that match. Voting. Wellness. Inclusive Design. Doing my best and none of the little things.
            </p>
          </div>
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
