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
    let caption = (<div className="daihan-caption">
      <h1>Let’s be friends.</h1>
      <p className="daihan-desc">I’ll go first. I’m Daihan, and I design software people like to use. 
        <br/><br/>
        After graduating from design school in Stratford, Ontario (yes, where Justin Bieber is from), I’ve been lucky enough to call New York City home. When I’m not glued to a screen, you’ll probably find me hanging with my pup, planning a trip, at the pottery studio, or all of the above. 
        <br/><br/>
        I’m fascinated by the quiet, mundane rhythms of everyday life and how it shifts from place to place. If perusing grocery store shelves and navigating public transit is how you like to discover a new city, we are already friends.
        <br/><br/>
        P.S. 53 tote bags is a totally normal, practical, and reasonable amount to have. Maybe.
      </p>
    </div>)

    return (
      <div className="about">
          <div className="daihan-image-wrapper">
            <img
              src={require('./images/daihan-looks-left.png')} alt='Me in a checkered dress, leaning on an end table, and looking to the left.' className='daihan-img'>
            </img>
          </div>
          {caption}
        </div>
    );
  }
}

export default About;
