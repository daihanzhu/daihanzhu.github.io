import React, { Component } from 'react';
import Header from './Header.jsx';
import './Intro.css';

import Views from './Views.js';

class Intro extends Component {
  mainContent() {
    return (<div>
      <h1>Hello, I’m Daihan <span className="pronouns">(she/her)</span><br/>I’m a product designer and illustrator</h1>
      <p className="daihan-intro">        
        As a designer, I’m on a mission to make people’s digital experiences more delightful, inclusive, and valuable. I think holistically while placing every pixel with purpose. 
        <br/><br/>
        As a human, I’m trying my best to take care of our Earth. 
      </p>
    </div>);
  }

  aboutContent() {
    return (<div className="daihan-caption">
      <h1>Let’s be friends.</h1>
      <p className="daihan-desc">I’ll start. I’m Daihan and I design software people like to use. But enough about that. 
        <br/><br/>
        In the past, I’ve lived in 3 continents, been an alphabetizer of books, 4th place winning curler, and guilty of over-filtering my online self. 
        <br/><br/>
        For the time being, I make a lot of mistakes and I’m overly curious about the world.
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
