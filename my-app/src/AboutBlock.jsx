import React, { Component } from 'react';
import './AboutBlock.css';

class AboutBlock extends Component {
  render() {
    return (
      <div className="block-wrapper">
        <img src={this.props.image} alt={this.props.altText} className="about-img"></img>
        <h1 className="image-title">{this.props.title}</h1>
        <div className="image-caption">
          <p className="image-desc">{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default AboutBlock;
