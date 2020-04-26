import React, { Component } from 'react';
import './Thumbprint.css';

class Thumbprint extends Component {
  render() {
    const heading = this.props.heading;

    return (
      <div className="thumbprint_wrapper">
        <img src={require( `./images/thumbprint.png` )} alt={this.props.altText} className="thumbprint_bgd"></img>
        <div className="thumbprint_heading">
          {heading}
        </div>
      </div>
    );
  }
}

export default Thumbprint;
