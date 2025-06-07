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

  // Intentionally empty. Content can be found in Intro.jsx
  render() {
    return (
      <div/>
    );
  }
}

export default About;
