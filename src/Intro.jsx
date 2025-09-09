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

  render() {
    const allowedViews = [Views.Tiles]
    if (!allowedViews.includes(this.props.view)) {
      return null;
    }

    return (
      <div className="intro-wrapper">
        <Header
          goHome={this.props.goHome}
          view={this.props.view}
          switchView={this.props.switchView}
        />
        <div className="intro">
          {this.mainContent()}
        </div>
      </div>
    );
  }
}

export default Intro;
