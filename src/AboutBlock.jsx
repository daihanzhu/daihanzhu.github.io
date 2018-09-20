import React, { Component } from 'react';
import classNames from 'classnames';
import './AboutBlock.css';

class AboutBlock extends Component {
  render() {
    let titleClassName = classNames({
      'image-title': true,
      'float-right': !this.props.rightAligned
    })

    let captionClassName = classNames({
      'image-caption': true,
      'float-right': !this.props.rightAligned
    })

    let imageClassName = classNames({
      'about-img': true,
      'float-right': this.props.rightAligned
    });

    return (
      <div className="block-wrapper">
        <img src={this.props.image} alt={this.props.altText} className={imageClassName}></img>
        <h1 className={titleClassName}>{this.props.title}</h1>
        <div className={captionClassName}>
          <p className="image-desc">{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

export default AboutBlock;
