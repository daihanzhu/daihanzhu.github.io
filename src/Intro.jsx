import React, { Component } from 'react';
import './Intro.css';

import Views from './Views.js';

class Intro extends Component {
  render() {
    const allowedViews = [Views.Tiles, Views.About, Views.QAndA]
    if (!allowedViews.includes(this.props.view)) {
      return null;
    }

    return (
      <div className="intro">
        <div className="daihan-image-wrapper">
          <img src={require('./images/daihan.png')} alt="Me in the Sahara" className='daihan-img'>
          </img>
        </div>
        {/* TODO: Move the text content into separate methods and choose based on view */}
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
      </div>
    );
  }
}

export default Intro;
