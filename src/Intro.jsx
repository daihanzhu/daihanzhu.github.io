import React, { Component } from 'react';
import Header from './Header.jsx';
import './Intro.css';

import Views from './Views.js';

class Intro extends Component {
  mainContent() {
    return (<div>
      <h1>Hello, I’m Daihan <span className="pronouns">(she/her)</span><br/>I’m a product designer and illustrator</h1>
      <p className="daihan-intro">        
        As a designer, I’m on a mission to make people’s digital experiences more useful, inclusive, and delightful. I think holistically while placing every pixel with purpose.
        <br/><br/>
        As a human, I recycle, overplan, and wonder how many tote bags is too many.
      </p>
    </div>);
  }

  aboutContent() {
    return (<div className="daihan-caption">
      <h1>Let’s be friends.</h1>
      <p className="daihan-desc">I’ll go first. I’m Daihan, and I design software people like to use. 
        <br/><br/>
        After graduating from design school in Stratford, Ontario (yes, where Justin Bieber is from), I’ve been lucky enough to call New York City home. When I’m not glued to a screen, you’ll probably find me hanging with my pup, planning a trip, at the pottery studio, or all of the above. 
        <br/><br/>
        I’m fascinated by the quiet, mundane rhythms of everyday life and how it shifts from place to place. If perusing grocery store shelves and navigating public transit is how you like to discover a new city, we are already friends.
        <br/><br/>
        P.S. 53 tote bags is a totally normal, practical, and reasonable amount to have. Maybe.
      </p>
    </div>);
  }

  render() {
    const allowedViews = [Views.Tiles, Views.About]
    if (!allowedViews.includes(this.props.view)) {
      return null;
    }

    let bodyText = null;
    let daihanImg = null;
    switch (this.props.view) {
      case Views.Tiles:
        bodyText = this.mainContent();
        break;
      case Views.About:
      default:
        bodyText = this.aboutContent();
        daihanImg = <img
            src={require('./images/daihan-looks-left.png')} alt='Me in a checkered dress, leaning on an end table, and looking to the left.' className='daihan-img'>
          </img>;
        break;
    }

    return (
      <div className="intro-wrapper">
        <Header
          goHome={this.props.goHome}
          view={this.props.view}
          switchView={this.props.switchView}
        />
        <div className="intro">
          {daihanImg && <div className="daihan-image-wrapper">
            {daihanImg}
          </div>}
          {bodyText}
        </div>
      </div>
    );
  }
}

export default Intro;
