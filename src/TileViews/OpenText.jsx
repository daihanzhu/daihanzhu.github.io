import React, { Component } from 'react';
import Grid from '../Grid.jsx';
import tiles from '../TileData.json';

import './OpenText.css';
import '../ContentWrapper.css'

class OpenText extends Component {
  render() {
    return (
      <div className="open-text-wrapper">
        <div className="content-heading-wrapper">
          <h1 className="content-heading">Bringing software to life one product illustration at a time</h1>
          <p>UX Visual designer, illustrator | 2018 | B2B Enterprise Software, Information Cloud Solutions</p>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/empty.png')} alt='OpenText' className="content-img tileImg"></img>
          </div>
          <div className="content-caption">
            <h2>Empty state illustrations</h2>
            <p className="content-desc">
              OpenText is a global leader in Enterprise Content Management, trusted by millions of users across the world. 
              <br/><br/>
              While on the OpenText Design Team, I had the opportunity to reimagine the empty state experience and help conceptualize and define product illustration language.
            </p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <h2>Legacy experience</h2>
            <img src={require('../images/openText/original.png')} alt='Original Empty States' className="bordered-img content-img"></img>
          </div>
          <div className="content-img-wrapper">
            <h2>New experience</h2>
            <img src={require('../images/openText/new-empty-states.png')} alt='New Empty States' className="bordered-img content-img"></img>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/openText/shapes.png')} alt='Shapes and Colours' className="content-img"></img>
          </div>
          <div className="content-caption">
            <h2>Building the foundation</h2>
            <p className="content-desc">
              Like any good design system, it starts with a strong foundation. I explored the existing color palette, experimented with shapes, gradient, and line styles.
              <br/><br/>
              For each empty state, I came up with a few sketches that reflect the story of the scenario. Some are celebratory for completing all tasks and some are sympathetic for moments of frustration. After a few rounds of iteration and feedback, I narrowed it down to 2 versions for each empty state for feedback with the wider team.
            </p>
          </div>
        </div>

        <div className="content-wrapper">
          <img src={require('../images/openText/12-phones.png')} alt='Empty States' className="content-img"></img>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h2>Expanding across all platforms</h2>
            <p className="content-desc">
              The team loved the illustrations so much and requested them to be adapted for usage platform wide. Because I had planned for scalability from the start, adapting the assets for new formats and backgrounds was a seamless process.
              <br/><br/>
              Thanks for looking!
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={require('../images/openText/mock-up.png')} alt='Nodes List' className="es-img4"></img>
          </div>
        </div>

        <Grid
          tileData={[tiles[0], tiles[1]]}
          switchView={this.props.switchView}
          heading={"Up next"}
        />
      </div>);
  }
}

export default OpenText;
