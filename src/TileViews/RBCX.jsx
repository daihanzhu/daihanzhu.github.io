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
        <div className="content-heading-wrapper">
          <h1 className="content-heading">Reimagining the ultimate innovation experience for change-makers</h1>
          <p>Graphic designer, illustrator | 2017 | Banking, employee experience </p>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/rbcx/rbcx-poster.png')} alt='RBCX Poster' className="content-img tileImg"></img>
          </div>
          <div className="content-caption">
            <h2>RBCx intrapreneurship experience</h2>
            <p className="content-desc">RBC Royal Bank was on a mission to empower their 97,000+ employees around the world to innovate by establishing an intrapreneurship program called RBCx, a 12-week incubator program, ran by Venture Inside, designed to turn ideas into viable startups.
              <br/><br/>
              As the program’s first designer, I collaborated with the core team to shape the mission, establish the brand, and design a cohesive end-to-end experience.
            </p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h2>Connecting the brand</h2>
            <p className="content-desc">We needed a brand that complement each other. Venture Inside powers the strategy and support behind the scenes, while RBCx is the public-facing innovation program.
              <br/><br/>
              Through various exploration, we landed on a visual identify that represented our slick yet candid personality.
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={require('../images/rbcx/venture-inside-rbc.png')} alt='Venture and RBCX Logos' className="content-img"></img>
          </div>
        </div>

        <div className="content-heading-wrapper">
          <img src={require('../images/rbcx/all-my-exes.png')} alt='Misc. Logos' className="content-img"></img>
          <div className="content-mini-caption">Early explorations</div>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h2>Unifying the experience</h2>
            <p className="content-desc">Once we had established the brand, it was full steam ahead. We created custom play books to walk founders, consultants, and advisors through the journey from the first day to the final pitch. 
              <br/><br/>
              Aside from the usual suspect of stickers and T-Shirts, I designed trading cards, beer coasters, comic strips, and even a life-sized graphic for an interactive game.
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={require('../images/rbcx/founder.png')} alt='Founder book' className="content-img"></img>
          </div>
        </div>

        <div className="content-wrapper design-thinking-wrapper">
          {designThinkingImages}
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h2>Laying the foundation</h2>
            <p className="content-desc">I’m incredibly proud of the work we started at RBC. What began as a small, scrappy initiative has since grown into a full-fledged venture incubator with a portfolio of successful startups, and a reputation for innovation inside one of Canada’s largest banks.
              <br/><br/>
              I’m thrilled to have helped shape the foundation, and excited to see where it goes next.
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
          heading={"Up next"}
        />
      </div>
    );
  }
}

export default RBCX;
