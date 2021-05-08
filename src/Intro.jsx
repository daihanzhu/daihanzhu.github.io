import React, { Component } from 'react';
import './Intro.css';

import Views from './Views.js';

class Intro extends Component {
  mainContent() {
    return (<div className="daihan-caption">
      <h1>Hey people</h1>
      <p className="daihan-desc">MEow meow meow meow meow
      </p>
    </div>);
  }

  aboutContent() {
    return (<div className="daihan-caption">
      <h1>Let’s be friends</h1>
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
    const allowedViews = [Views.Tiles, Views.About, Views.QAndA]
    if (!allowedViews.includes(this.props.view)) {
      return null;
    }

    let bodyText = undefined;
    switch (this.props.view) {
      case Views.Tiles:
        bodyText = this.mainContent();
        break;
      case Views.About:
        bodyText = this.aboutContent();
        break;
      // TODO: Implement Q+A page
      case Views.QAndA:
        bodyText = <div>TODO</div>;
        break;
      default:
        bodyText = "INVALID STATE";
    }

    return (
      <div className="intro">
        <div className="daihan-image-wrapper">
          <img src={require('./images/daihan.png')} alt="Me in the Sahara" className='daihan-img'>
          </img>
        </div>
        {bodyText}
      </div>
    );
  }
}

export default Intro;
