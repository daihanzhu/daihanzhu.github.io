import React, { Component } from 'react';
import './EmptyState.css';
import '../ContentWrapper.css'

class EmptyState extends Component {
  render() {
    return (
      <div className="empty-state">
        <div className="empty-state-header"></div>
        <div className="empty-state-title">
          <h1>Empty State Illustration</h1>
        </div>
        <div className="content-wrapper">
          <p className="empty-state-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <img src={require('../images/emptyState/original.png')} alt='Original State' className="empty-state-img es-img1"></img>
          <h2> The problem</h2>
          <p>Here's a bunch of text about the image on the left</p>
          <h2> The goal</h2>
          <p>Here's my goal blah blah blah</p>
          <div className="clear-float"></div>
          <img src={require('../images/emptyState/inspiration.png')} alt='My inspiration' className="empty-state-img es-img2"></img>
          <h2> The problem</h2>
          <p>Here's a bunch of text about the image on the left</p>
          <h2> The goal</h2>
          <p>Here's my goal blah blah blah</p>
          <img src={require('../images/emptyState/shapes.png')} alt='Shapes and Colours' className="empty-state-img es-img2"></img>
          <div className="clear-float"></div>
        </div>
        <img src={require('../images/emptyState/mid-header.png')} alt='Mid Header' className="es-mid-header"></img>
        <div className="content-wrapper">
          <h2>Actually doing it</h2>
          <p className="empty-state-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <h2>Getting feedback</h2>
          <p className="empty-state-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <img src={require('../images/emptyState/12-phones.png')} alt='Empty States' className="es-img3"></img>
          <h2>Looking back</h2>
          <p className="empty-state-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <h2>The Final Set</h2>
          <p className="empty-state-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
        </div>
        <img src={require('../images/emptyState/emptyall.png')} alt='More Empty States' className="es-mid-header"></img>
        <div className="content-wrapper">
          <h2>Looking back</h2>
          <p className="empty-state-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
        </div>
        <img src={require('../images/emptyState/coffee.png')} alt='Empty States' className="es-img3"></img>
        <div className="es-shape-container">
          <div className="es-shape-thingy"></div>
          <img src={require('../images/emptyState/nodes-list.png')} alt='Nodes List' className="es-img4"></img>
        </div>
      </div>
    );
  }
}

export default EmptyState;
