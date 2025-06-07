import React, { Component } from 'react';
import Grid from '../Grid.jsx';
import tiles from '../TileData.json';

import './EmptyState.css';
import '../ContentWrapper.css'

class EmptyState extends Component {
  render() {
    return (
      <div className="empty-state">
        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/empty.png')} alt='OpenText' className="content-img tileImg"></img>
          </div>
          <div className="content-caption">
            <h2>Empty State Illustrations</h2>
            <p className="content-desc">
              OpenText is the leader in Enterprise Content Management software trusted by millions of users around the world.
              <br/><br/>
              While part of the OpenText Design Team, I got the chance to re-imagine the empty states while developing our product illustration language. This project took around 2 weeks.
            </p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <h2>Old Experience</h2>
            <img src={require('../images/emptyState/original.png')} alt='Original Empty States' className="shadowed-img content-img"></img>
          </div>
          <div className="content-img-wrapper">
            <h2>New Experience</h2>
            <img src={require('../images/emptyState/new-empty-states.png')} alt='New Empty States' className="shadowed-img content-img"></img>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-caption">
            <h2>Building Foundations</h2>
            <p className="content-desc">
              A scalable Design System always starts with a strong foundation. I started by going through the existing color palette and playing with different shapes, gradients, and lines.
              <br/><br/>
              Next, I started to generate ideas from sketches.
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={require('../images/emptyState/shapes.png')} alt='Shapes and Colours' className="content-img"></img>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/emptyState/FullSizeRender.png')} alt='Full Size Render' className="shadowed-img content-img"></img>
          </div>
          <div className="content-caption">
            <h2>Iterating on Feedback</h2>
            <p className="content-desc">
              For each empty state, I came up with a few sketches that reflect the story of the scenario. Some are celebratory for completing all tasks, and some are sympathetic for moments of frustration, all while trying to sneak at least one cat in there.
              <br/><br/>
              After a few rounds of iteration and feedback, I came up with 2 versions for each empty state for feedback with the wider team.
            </p>
          </div>
        </div>
        <div className="content-wrapper">
          <img src={require('../images/emptyState/12-phones.png')} alt='Empty States' className="content-img"></img>
        </div>
        <div className="content-wrapper">
          <div className="content-caption">
            <h2>Expanding Across Platforms</h2>
            <p className="content-desc">
              The team loved the illustrations so much and requested them to be adopted for desktop use. I had this in mind from the start so it was very easy to flip the switch for a larger screen and different background.
              <br/><br/>
              Thanks for looking!
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={require('../images/emptyState/mock-up.png')} alt='Nodes List' className="es-img4"></img>
          </div>
        </div>
        <Grid
          tileData={[tiles[1], tiles[2]]}
          switchView={this.props.switchView}
          showHeading
        />
      </div>);
  }
}

export default EmptyState;
