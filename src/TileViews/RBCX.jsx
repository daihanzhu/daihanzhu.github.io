import React, { Component } from 'react';
import './RBCX.css';
import '../ContentWrapper.css'

class EmptyState extends Component {
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

  render() {
    console.log(this.state.width );
    const designThinkingImages = this.state.width >= 650 ?
      (<div><img src={require('../images/rbcx/backpacker.png')} alt="Design Thinking Book" className="backpacker"></img>
      <img src={require('../images/rbcx/dt-page4.png')} alt="Design Thinking Page 4" className="open-book"></img>
      <img src={require('../images/rbcx/dt-cover.png')} alt="Design Thinking Cover" className="backpacker"></img>
      <img src={require('../images/rbcx/dt-page3.png')} alt="Design Thinking Page 3" className="open-book"></img></div>) :
      (<div><img src={require('../images/rbcx/backpacker.png')} alt="Design Thinking Book" className="backpacker"></img>
      <img src={require('../images/rbcx/dt-cover.png')} alt="Design Thinking Cover" className="backpacker"></img>
      <img src={require('../images/rbcx/dt-page3.png')} alt="Design Thinking Page 3" className="open-book"></img>
      <img src={require('../images/rbcx/dt-page4.png')} alt="Design Thinking Page 4" className="open-book"></img></div>);

    return (
      <div className="rbcx">
        <div className="rbcx-header content-header"></div>
        <div className="content-wrapper">
          <div className="content-title">
            <h1>RBCX - Powered by Venture Inside RBC</h1>
          </div>
          <p className="content-desc rbcx-desc">In summer 2017, I joined the Intrapreneurship team (Venture Inside) as their first ever design intern at the RBC Royal Bank of Canada. Our mission was to challenge and enable RBC employees around the globe to solve important problems, develop product thinking, and innovate much like entrepreneurs, but with the resource of a multinational company.
            <br/><br/>
            RBCx is a startup accelerator program powered by Venture Inside that puts employees through an intensive 10-week program to solve big, disruptive problems. From my very first day, I was thrown right into the action and worked with the venture teams to develop their ideas into a prototype. From there, I worked closely with the managing team to re-design the branding for both Venture Inside and RBCx, as well as multiple resources on topics such as Design Thinking and problem pitching.</p>
          <img src={require('../images/rbcx/venture-inside.png')} alt='Venture Inside' className="rbcx-img rbcx-img2"></img>
          <div className="side-caption">
            <h2 className="venture-caption">Discovery</h2>
            <p>Designing a logo goes beyound the pixels that appear on an artboard. The first step is to gather a holistic view of the representation of the brand to the point that every detail has been considered.
            <br/><br/>
            The team and I went through countless sketches, feedbacks, and whiteboarding sessions to what it eventually become. A logo that is flexible, recognizable, and representative of our slick yet candid personality.
            <br/><br/>
            Branding should be fluid. It can be build upon and taken apart. They have an attitude and can possese personality of their own, and that’s what makes it so much fun. </p>
          </div>
          <div className="clear-float"></div>
          <div className="par-block">
            <h2>Iterating</h2>
            <p>Now that Venture Inside has its own shiny identity, time for RBCx to get a refresher as well. When I joined, RBCx was just wrapping up its first cohort and gearing up for the next one, so a large part of the process is iterating and taking it to the next level. Starting with the branding.</p>
          </div>
        </div>
        <img src={require('../images/rbcx/rbcx-logo.png')} alt='My inspiration' className="rbcx-img3"></img>
        <div className="poster-container">
          <div className="rbcx-img4-cont">
            <img src={require('../images/rbcx/rbcx-poster.png')} alt='RBCX Poster' className="rbcx-img4"></img>
          </div>
          <div className="poster-desc">
            <div className="poster-desc-inner">
              <h2>Isometric Illustration</h2>
              <p>I designed and illustrated this poster to promote RBCx. I was inspired by an ad I saw in the subway station in this isometric style and became hooked. At first, I intended to just play around in illustrator and maybe make it into a Snapchat geofilter or something, but 6 hours later, this happend.
              <br/><br/>
              I call this the idea factory. You can follow the “ideas” out of office building on the left and see it magically turn into bananas, which then goes to power the lights. Of course, the bananas get recycled back into the system because no idea is a rotten idea.
              <br/><br/>
              My proudest moment was when this poster was plastered on the projector during a townhall at the Art Gallary of Ontario, maybe it belongs there or something. </p>
            </div>
          </div>
        </div>
        <div className="rbc-wrapper-a">
          <img src={require('../images/rbcx/rbc-dots.png')} alt='' className="rbc-dots"></img>
          <img src={require('../images/rbcx/founder.png')} alt='Founder experience book' className="founder-img"></img>
          <div className="pink-box"></div>
          <div className="center-box playbook-box">
            <h2>RBCx Experience Playbook</h2>
            <p>A series of playbooks was designed to equipt founders, consultants, and advisors with the information they needed from the very first day to find success throughout the 10 weeks.</p>
          </div>
        </div>
        {designThinkingImages}
        <div className="center-box">
          <h2>Design Thinking Work Book</h2>
          <p>A series of playbooks was designed to equipt founders, consultants, and advisors with the information they needed from the very first day to find success throughout the 10 weeks.</p>
        </div>
        <div className="content-wrapper mid-content-wrapper">
          <img src={require('../images/rbcx/our-brand.png')} alt="Our Brand" className="our-brand"></img>
          <img src={require('../images/rbcx/hand-with-cards.png')} alt="Hand with cards" className="hand-cards"></img>
          <div className="par-block">
            <h2>Insight 1: people like information in bite sizes</h2>
            <p>This set of trading cards I designed were passed out at townhalls and expos to introduce and break down the concept of problem solving through Design Thinking. They were a huge hit and I especailly loved seeing people sifting through the pile trying to collect them all, as if they were pokemon cards or something.</p>
            <h2>Insight 2: innovation doesn’t have to be complicated</h2>
            <p>Mid way through the summer, I wanted to give community engagement a try. So I band together a group of interns and brainstormed ways we can get everyone excited about intrapreneurship. We knew it had to be interactive, fun, and accssible, so a pop-up shop quickly came to mind.
            <br/><br/>
            In the past, we’ve used “pipe cleaner prototyping” as an actitivity to get people thinking on their feet and use their hands to make something tangible, so along with that, we came up with a series of challenges that draws attention to teamwork, problem solving, and getting you outside of your comfort zone. Some of these challenges include the classic egg drop, spaghetti tower, and building a Rube Goldburg Machine. Oh and VR games, because VR is cool. I wrote more about it
            <a href="https://medium.com/@daihan/a-beginners-guide-to-innovation-b78be55ceda9" target="_blank"> here</a>.
            <br/><br/>
            We had such a great turn out that we had to tell people to quite down at some point because they got too into the challenges.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EmptyState;
