import React, { Component } from 'react';
import AboutBlock from '../AboutBlock.jsx'
import './Kudos.css';

class Kudos extends Component {
  _fetchImage( name ) {
    return require( `../images/kudos/${name}` );
  }

  render() {
    let rightAligned = false;

    return (
      <div className="kudos">
        <div className="kudos-header content-header">
          <div className="kudos-inlay">
            <img src={this._fetchImage('screenshot1.png')} alt='Kudos UI' className="kudos-inlay-img"></img>
            <div className="kudos-title">
              <h3>UI/UX</h3>
              <h1>Giving Thanks</h1>
            </div>
          </div>
        </div>
        <div className="kudos-wrapper content-wrapper">
          <div className="kudos-caption">
            <h1>What is Kudos?</h1>
            <br/>
            <p className="daihan-desc"><b>Kudos</b>. <i>noun</i> : praise and honor received for an achievement.<br/>
            <br/>
            The Kudos platform empowers users to recognize the achievements of their coworkers and earn points that they can spend on gift cards.<br/>
          </p>
          </div>
          <div className="clear-float"></div>
        </div>
      </div>

    );
  }
}

export default Kudos;
