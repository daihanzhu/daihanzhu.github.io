import React, { Component } from 'react';
import Grid from '../Grid.jsx';
import tiles from '../TileData.json';

import './Fora.css';

class Fora extends Component {
  _fetchImage( name ) {
    return require( `../images/fora/${name}` );
  }

  render() {
    return (
      <div className="fora">
        <div className="content-heading-wrapper">
          <h1 className="content-heading">Cultivating communities for people who really, really care about their hobbies</h1>
          <p>Product Designer | 2023 - Present | B2C, Consumer community tech</p>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={this._fetchImage('fora.png')} alt='Fora Mobile App' className="content-img tileImg"></img>
          </div>
          <div className="content-caption">
            <h2>Fora, 1 app for 1000+ online communities</h2>
            <p className="content-desc">
              Fora is the world’s largest forum software platform powering over 1000 unique communities with more than 100 million monthly active users. 
              <br/><br/>
              Each community operates independently under a shared web infrastructure, but for users, being part of multiple sites meant juggling separate logins and navigating a fragmented experience.
            </p>
          </div>
        </div>

        <div className="content-heading-wrapper">
          <h1 className="content-heading">For the first time, members can now seamlessly participate in all of their communities in one unified experience</h1>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h2>0 to 1</h2>
            <p className="content-desc">
                As the mobile design lead, I collaborated with product, research, and engineering to fully imagine a better, more intuitive mobile-first experience, starting from scratch.
                <ul>
                    <li>Establish the design vision and product strategy</li>
                    <li>Balance a modern app experience that attracts new members but familiarity and powerful tools to a super-poster</li>
                    <li>Putting the users first by preserving the core forum paradigms that foster deep, meaningful discussions</li>
                </ul>
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={this._fetchImage('thread-view.png')} alt='Fora App: Thread View' className="content-img"></img>
            <div className='content-mini-caption'>Web vs mobile, same thread</div>
          </div>
        </div>

        <div className="content-heading-wrapper">
          <img src={this._fetchImage('home-evolution.png')} alt='Home Page Evolution' className="content-img"></img>
          <div className="content-mini-caption">Iterative evolution of the home experience, from embedded webview to native</div>
        </div>

        <div className="content-heading-wrapper">
          <h1 className="content-heading">On average, members who moved from web to mobile created 19% more posts and spent 30% more time in their community</h1>
        </div>

        <div className="content-heading-wrapper">
          <img src={this._fetchImage('landing-mock.png')} alt='Landing Page Mockup' className="content-img"></img>
          <div className="content-mini-caption">App landing page, 1 of many growth marketing initiatives</div>
        </div>

        <div className="content-heading-wrapper">
          <h1 className="content-heading">We’ve already seen 23% year over year growth organically, and we’re just getting started</h1>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={this._fetchImage('blog-header.png')} alt='Blog Header' className="content-img tileImg"></img>
          </div>
          <div className="content-caption">
            <h2>Looking forward</h2>
            <p className="content-desc">
              Our growth has been intentionally organic, allowing us to validate key user experiences, gather feedback, and ensure we were solving the right problems. This gave us confidence that we were building something our members genuinely love.
              <br/><br/>
              For a deeper dive into the design journey, don’t be shy, reach out! 
            </p>
          </div>
        </div>

        <Grid
          tileData={[tiles[1], tiles[2]]}
          switchView={this.props.switchView}
          heading={"Up next"}
        />
      </div>);
  }
}

export default Fora;
