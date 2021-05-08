import React, { Component } from 'react';
import './Kudos.css';

class Kudos extends Component {
  _fetchImage( name ) {
    return require( `../images/kudos/${name}` );
  }

  render() {
    return (
      <div className="kudos">
        <div className="kudos-inlay">
          <div className="kudos-inlay-img-wrapper">
            <img src={this._fetchImage('phones.png')} alt='Kudos UI' className="kudos-inlay-img"></img>
          </div>
          <div className="kudos-title">
            <h3>UI/UX</h3>
            <h1>Giving Thanks</h1>
            <p className="kudos-desc">Year: <b>2019-present</b> | Role: <b>Sole Product Designer</b> | Tools: <b>Figma</b><br/>
              <br/>
              The Kudos platform empowers users to recognize the achievements of their coworkers and earn points that they can spend on gift cards.<br/><br/>
              I have the exciting opportunity to shape the design of Kudos from the ground up. Kudos is an Enterprise Recognition Platform serving clients in over 80 countries.
            </p>
          </div>
        </div>
        <div className="kudos-wrapper">
          <img src={this._fetchImage('kudos-display 1.png')} alt='Kudos UI' className="kudos-big-img"></img>
          <div className="kudos-caption">
            <a href="mailto:daihanzhu@gmail.com" target="_blank"
              rel="noopener noreferrer"
              className="kudos-contact">
              Get in touch
            </a> if you’d like to learn more about the design process
            </div>
        </div>
      </div>

    );
  }
}

export default Kudos;
