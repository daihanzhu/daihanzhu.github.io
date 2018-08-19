import React, { Component } from 'react';
import './RBCX.css';
import '../ContentWrapper.css'

class EmptyState extends Component {
  render() {
    return (
      <div className="rbcx">
        <div className="rbcx-header content-header"></div>
        <div className="content-title">
          <h1>RBCX - Powered by Venture Inside RBC</h1>
        </div>
        <div className="content-wrapper">
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <img src={require('../images/emptyState/original.png')} alt='Original State' className="rbcx-img rbcx-img1"></img>
          <h2> The problem</h2>
          <p>Here's a bunch of text about the image on the left</p>
          <h2> The goal</h2>
          <p>Here's my goal blah blah blah</p>
          <div className="clear-float"></div>
          <img src={require('../images/emptyState/inspiration.png')} alt='My inspiration' className="rbcx-img rbcx-img2"></img>
          <h2> The problem</h2>
          <p>Here's a bunch of text about the image on the left</p>
          <h2> The goal</h2>
          <p>Here's my goal blah blah blah</p>
          <img src={require('../images/emptyState/shapes.png')} alt='Shapes and Colours' className="rbcx-img rbcx-img2"></img>
          <div className="clear-float"></div>
        </div>
        <img src={require('../images/emptyState/mid-header.png')} alt='Mid Header' className="rbcx-mid-header"></img>
        <div className="content-wrapper">
          <h2>Actually doing it</h2>
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <h2>Getting feedback</h2>
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <img src={require('../images/emptyState/12-phones.png')} alt='Empty States' className="rbcx-img3"></img>
          <h2>Looking back</h2>
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <h2>The Final Set</h2>
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
        </div>
        <img src={require('../images/emptyState/emptyall.png')} alt='More Empty States' className="rbcx-mid-header"></img>
        <div className="content-wrapper">
          <h2>Looking back</h2>
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
        </div>
        <img src={require('../images/emptyState/coffee.png')} alt='Empty States' className="rbcx-img3"></img>
      </div>
    );
  }
}

export default EmptyState;
