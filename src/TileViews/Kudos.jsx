import React, { Component } from 'react';
import AboutBlock from '../AboutBlock.jsx'
import './Kudos.css';

import kudosData from './KudosData.json';

class Kudos extends Component {
  _fetchImage( name ) {
    return require( `../images/${name}` );
  }

  render() {
    let rightAligned = false;

    const blocks = kudosData.map((item) =>
        <AboutBlock
          key={item.title}
          title={item.title}
          desc={item.description}
          image={item.image ? this._fetchImage(item.image) : null}
          altText={item.image}
          rightAligned={ rightAligned = !rightAligned }
        />
    );

    return (
      <div className="about">
        <div className="content-wrapper">
          <div className="star-container">
            <div className="back-square"></div>
            <div className="kudos-star"></div>
          </div>
          <div className="kudos-caption">
            <h1>What is Kudos?</h1>
            <br/>
            <p className="daihan-desc"><b>Kudos</b>. <i>noun</i> : praise and honor received for an achievement.<br/>
            <br/>
            The Kudos platform empowers users to recognize the achievements of their coworkers and earn points that they can spend on gift cards.<br/>
          </p>
          </div>
          <div className="clear-float"></div>
          {blocks}
          <div className="about-text-block">
            <h1>Stuff I care about</h1>
            <p>The word community means the world to me, and bringing people together is at the core of what I do. Currently, I'm building a more inclusive entrepreneurial community at the heart of innovation - the University of Waterloo.</p>

            <h3>MY COMMUNITIES</h3>
            <div className="list-column">
              <ol>
                <li><a href="https://uwaterloo.ca/housing/werc" target="_blank">WERC</a></li>
                <li><a href="https://designx.community/" target="_blank">DesignX</a></li>
                <li><a href="http://www.feds.ca/" target="_blank">Feds</a></li>
              </ol>
            </div>
            <div className="list-column">
              <ol>
                <li><a href="http://velocity.uwaterloo.ca" target="_blank">Velocity</a></li>
                <li><a href="https://uwaterloo.ca/arts-student-union/" target="_blank">Arts Student Union</a></li>
                <li><a href="https://www.edmonton.ca/programs_services/for_children_kids_youth/youth-programs.aspx" target="_blank">Leaders in Training</a></li>
              </ol>
            </div>
            <div className="list-column">
              <ol>
                <li><a href="https://www.edmonton.ca/programs_services/for_children_kids_youth/leaders-in-training-photo-gallery.aspx" target="_blank">City of Edmonton</a></li>
                <li><a href="https://www.epl.ca/browse_program/makerspace/" target="_blank">EPL Makerspace</a></li>
                <li><a href="https://www.residence.ualberta.ca/current-residents/residence-associations" target="_blank">Michener Park</a></li>
               </ol>
             </div>
             <div className="clear-float"></div>
          </div>
        </div>
      </div>

    );
  }
}

export default Kudos;
