import React, { Component } from 'react';
import Grid from '../Grid.jsx';
import tiles from '../TileData.json';

import './RBCX.css';
import '../ContentWrapper.css'

class RBCX extends Component {
  constructor(props) {
    super(props)
    this.updateDimensions = this.updateDimensions.bind(this);

    this.state = {
      width: 0
    }
  }

  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions()
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  _fetchImage( name ) {
    return require( `../images/rbcx/${name}` );
  }

  render() {
    const imageObjs = [
      {src: 'backpacker.png', alt: 'Design Thinking Book', class: 'backpacker'},
      {src: 'dt-page4.png', alt: 'Design Thinking Page 4', class: 'open-book'},
      {src: 'dt-cover.png', alt: 'Design Thinking Cover', class: 'backpacker'},
      {src: 'dt-page3.png', alt: 'Design Thinking Page 3', class: 'open-book'}];

    if (this.state.width < 650) {
      let temp = imageObjs[1];
      imageObjs[1] = imageObjs[2];
      imageObjs[2] = imageObjs[3];
      imageObjs[3] = temp;
    }

    const designThinkingImages = imageObjs.map((image) =>
      <img key={image.src} src={this._fetchImage(image.src)} alt={image.alt} className={image.class}></img>
    );

    return (
      <div className="rbcx">
        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/rbcx/rbcx-poster.png')} alt='RBCX Poster' className="content-img tileImg"></img>
            <div className="content-mini-caption">Hype Poster for RBCx</div>
          </div>
          <div className="content-caption">
            <h1>RBCx</h1>
            <p className="content-desc">
              In 2017, I joined the Intrapreneurship Team (Venture Inside) at RBC Royal Bank as the first designer. Our mission was to enable RBC employees around the world to build and innovate as entrepreneurs through programs like RBCx.
              <br/><br/>
              From my very first day, I was thrown right in and worked with the 1st cohort to turn their ideas into working prototypes. From there, I worked with the core team to further develop the program and establish our brand.
            </p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h1>Unifying the Brand Experience</h1>
            <p className="content-desc">
              We wanted a logo that compliments each other. Through various exploration, we came up with two logos that are flexible, recognizable, and representative of our slick yet candid personality.
            </p>
          </div>
          <div style={{maxWidth: '100px', minWidth: 'auto'}} className="content-img-wrapper">
            <img src={require('../images/rbcx/venture-inside.png')} alt='Venture Logo' className="content-img"></img>
          </div>
          <div style={{maxWidth: '150px', minWidth: 'auto'}} className="content-img-wrapper">
            <img src={require('../images/rbcx/rbcx.png')} alt='RBCX Logo' className="content-img"></img>
          </div>
        </div>

        <div className="content-wrapper">
          <img src={require('../images/rbcx/all-my-exes.png')} alt='Misc. Logos' className="shadowed-img content-img"></img>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h1>Cementing the Brand</h1>
            <p className="content-desc">
              Alongside Alysse Glick, project lead, we created custom playbooks to walk founders, consultants, and advisors through the journey from the very first day to the final pitch.
              <br/><br/>
              As part of the first touchpoint that people receive at the start of the program, a good impression is key. We wanted them to pick it up and say, “wow, this is the coolest shit I’m about to do”.
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={require('../images/rbcx/founder.png')} alt='Founder book' className="content-img"></img>
            <div className="content-mini-caption">The Founder Experience Playbook</div>
          </div>
        </div>

        <div className="content-wrapper design-thinking-wrapper">
          {designThinkingImages}
          <div className="content-mini-caption">Design Thinking Workbook</div>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/rbcx/hand-with-cards.png')} alt='Hand with cards' className="content-img"></img>
          </div>
          <div className="content-caption">
            <h1>Doing Things I’ve Never Done Before</h1>
            <p className="content-desc">
              Aside from the usual suspects of stickers and prints, I also got to design trading cards, comic strips, and even a life-sized graphic for an interactive game. It was SO much fun.
            </p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h1>It’s Only the Beginning</h1>
            <p className="content-desc">
              I’m proud of the work I’ve started at RBC. The last time I checked, the RBCx Program is going stronger than ever. They’ve even made the logo into a cookie, I want a cookie!
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={require('../images/rbcx/rbcx.gif')} alt='Powered by Intrapreneurship' className="rbcx-gif content-img"></img>
            <div className="content-mini-caption">Animated by Pigeon Row</div>
          </div>
        </div>
        <Grid
          tileData={[tiles[1], tiles[3]]}
          switchView={this.props.switchView}
          showHeading
        />
      </div>
    );
  }
}

export default RBCX;
