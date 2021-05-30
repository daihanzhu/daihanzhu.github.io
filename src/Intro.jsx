import React, { Component } from 'react';
import './Intro.css';

import Views from './Views.js';

class Intro extends Component {
  mainContent() {
    return (<div className="daihan-caption">
      <h1 className="daihan-intro">Hi, my name is Daihan (she/her) and I’m a product designer</h1>
      <p className="daihan-desc">
        As a designer, I’m on a mission to make people’s digital experiences more delightful, inclusive, and valuable. I think holistically while placing every last pixel with purpose.
        <br/><br/>
        As a human, I’m trying my best to take care of our Earth.
        <br/><br/>
        See my work
      </p>
      <img src={require('./images/down-arrow.png')} alt="down-arrow" className="down-arrow"></img>
    </div>);
  }

  aboutContent() {
    return (<div className="daihan-caption">
      <h1>Let’s be friends.</h1>
      <p className="daihan-desc">I’ll start. My name is Daihan, and I design software people like to use.
        <br/><br/>
        In the past, I’ve lived on 3 continents (North America, Europe, Asia), been an alphabetizer of books, 4th place winning curler, and guilty of over-filtering my online self.
        <br/><br/>
        In the future, I plan on illustrating a children’s book, grow an avocado tree, and ride horses into the sunset.
        <br/><br/>
        For the time being, I make a lot of mistakes and I’m overly curious about everything around me.
      </p>
    </div>);
  }

  render() {
    const allowedViews = [Views.Tiles, Views.About]
    if (!allowedViews.includes(this.props.view)) {
      return null;
    }

    let bodyText = undefined;
    let daihanImg = undefined;
    switch (this.props.view) {
      case Views.Tiles:
        bodyText = this.mainContent();
        daihanImg = <img
            src={require('./images/daihan-looks-left.png')} alt='Me looking to the side, sitting on some steps.' className='daihan-intro-img daihan-img'>
          </img>;
        break;
      case Views.About:
      default:
        bodyText = this.aboutContent();
        daihanImg = <img
            src={require('./images/daihan-chair1.png')} alt='Me on a chair' className='daihan-img'>
          </img>;
        break;
    }

    return (
      <div className="intro">
        <div className="daihan-image-wrapper">
          {daihanImg}
        </div>
        {bodyText}
      </div>
    );
  }
}

export default Intro;
