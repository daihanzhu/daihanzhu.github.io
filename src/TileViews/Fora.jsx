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
          <h1 className="content-heading">From 0→1(000): evolving the future of authentic online communities</h1>
          <p>Product Designer | 2023 - Present | B2C, Consumer social networking</p>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={this._fetchImage('fora.png')} alt='Fora Mobile App' className="content-img tileImg"></img>
          </div>
          <div className="content-caption">
            <h2>Fora, 1 app for 1000+ online communities</h2>
            <p className="content-desc">
              Fora is the world’s largest web-based forum software platform powering over 1000 unique communities with more than 100 million monthly active users. 
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
                As the mobile design lead, I collaborated with product, research, and engineering to reimagine a mobile-first experience, starting with 1 community in a lightweight hybrid app, which gave us time to:
                <ul>
                    <li>Iterate quickly to find product market fit  </li>
                    <li>Establish a clear design vision and strategy</li>
                    <li>Listen to early user feedback</li>
                </ul>
                By starting nimbo, we were able to focus on adding modern app functionalities while preserving the core forum paradigms that continues to foster deep, meaningful discussions
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={this._fetchImage('thread-view.png')} alt='Fora App: Thread View' className="content-img"></img>
            <div className='content-mini-caption'>Web vs mobile, same thread</div>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={this._fetchImage('multi-community-exp.png')} alt='Multi-community experience' className="content-img"></img>
            <div className='content-mini-caption'>Multi-community experience</div>
          </div>
          <div className="content-caption">
            <h2>1 to 1000+</h2>
            <p className="content-desc">
                The next phase was about scaling thoughtfully. We launched to 10 additional communities, then 1000 soon after. Meanwhile, we identified key areas to invest in that attracts new members as well as familiarity to a power-user:
                <ul>
                    <li>Easier content creation</li>
                    <li>Multi-community experience</li>
                    <li>Seamless login experience</li>
                </ul>
                Over the next few quarters, we tackled these challenges through constant iteration, prioritization, and balancing user needs with platform constraints.
            </p>
          </div>
        </div>

        <div className="content-heading-wrapper">
          <h1 className="content-heading">20% (and growing) of app users actively participate in two or more communities versus only 1% of web users</h1>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={this._fetchImage('spot1.png')} alt='Instant messaging spot image' className="spot-img"></img>
            <h2>Retention</h2>
            <p className="content-desc">Early retention was a challenge, but ongoing nativization efforts is moving the needle in stickiness, making the app feel faster, more intuitive, and better aligned with mobile user expectations.</p>
          </div>
          <div className="content-img-wrapper">
            <img src={this._fetchImage('spot2.png')} alt='Instant messaging spot image' className="spot-img"></img>
            <h2>Engagement</h2>
            <p className="content-desc">Many members turned off their notifications right away. By building them personalization tools and timely opt-in prompts we built trust and empowered them to stay engaged.</p>
          </div>
          <div className="content-img-wrapper">
            <img src={this._fetchImage('spot3.png')} alt='Instant messaging spot image' className="spot-img"></img>
            <h2>Traffic</h2>
            <p className="content-desc">A/B testing of value propositions helps us refine messaging towards different user segments drive new downloads. Not bad for a team of non-marketers learning on the fly.</p>
          </div>
        </div>

        <div className="content-heading-wrapper">
          <a href="https://fora.com/blog/mobile-app-new-thread-page/" rel="noopener noreferrer" target="_blank">
            <img src={this._fetchImage('blog-header.png')} alt='Blog Header' className="content-img tileImg"></img>
            <div className="content-mini-caption">Click here to read our blog post on launching native threads</div>
          </a>
        </div>

        <div className="content-heading-wrapper">
          <h1 className="content-heading">After installing the app, members’ average daily session rates rose by 38%</h1>
        </div>

        <div className="content-heading-wrapper">
          <img src={this._fetchImage('home-evolution.png')} alt='Home Page Evolution' className="content-img"></img>
          <div className="content-mini-caption">Iterative evolution of the home experience, from embedded webview to native</div>
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
            <img src={this._fetchImage('garage.png')} alt='Our future vision' className="content-img tileImg"></img>
          </div>
          <div className="content-caption">
            <h2>Looking forward</h2>
            <p className="content-desc">
              Our growth has been intentionally organic, which gave us confidence we’re building the multi-community experience our members genuinely love.
              <br/><br/>
              With a strong foundation in place, our roadmap is at a turning point where we can deliver even more exciting features for our now rapidly growing member base.
              <br/><br/>
              For a deeper dive into the design journey, please reach out.
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
