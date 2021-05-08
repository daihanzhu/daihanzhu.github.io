import React, { Component } from 'react';
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
        <div>
          <div className="content-title">
            <h1>RBCx - Powered by Venture Inside RBC</h1>
          </div>
          <p className="content-desc rbcx-desc">Client: <b>RBC</b> | Role: <b>Brand Designer</b> | Tools: <b>Illustrator, InDesign</b> | Timeframe: <b>3 months</b>
          <br/><br/>
          In 2017, I joined the Intrapreneurship team as their first ever designer at the Royal Bank of Canada. Our mission was to challenge and enable RBC employees around the globe to solve important problems through Design Thinking, innovate and take ownership as if they were entrepreneurs, but with the resource of a multinational company.
            <br/><br/>
            RBCx is a startup accelerator program powered by Venture Inside that puts employees through an intensive 10-week process to solve big, disruptive problems. From my very first day, I was thrown right into the action and worked with the venture teams to develop their ideas into a prototype. From there, I worked closely with the managing team to re-design the branding for both Venture Inside and RBCx, as well as multiple resources on topics such as Design Thinking and problem pitching.</p>
          <img src={require('../images/rbcx/venture-inside.png')} alt='Venture Inside' className="rbcx-img rbcx-img2 d-shadow"></img>
          <div className="side-caption">
            <h2 className="venture-caption">Brand identity</h2>
            <p>Designing a logo goes beyond the pixels that appear on an artboard. The first step is to gather a holistic view of the representation of the brand to the point that every detail has been considered.
            <br/><br/>
           The team and I went through countless sketches, feedbacks, and whiteboarding sessions to what it eventually become. A logo that is flexible, recognizable, and representative of our slick yet candid personality.
            <br/><br/>
            Branding should be fluid. It can be built upon and taken apart. They have attitudes and can possess personalities of their own, and that’s what makes it so much fun. </p>
          </div>
          <div className="clear-float"></div>
          <div className="par-block">
            <h2>Design + refine</h2>
            <p>Now that Venture Inside has its own shiny identity, time for RBCx to get a refresher as well. When I joined, RBCx was just wrapping up its first cohort and gearing up for the next one, so a large part of the process is iterating and taking it to the next level. Starting with the branding.
            <br/><br/>
            I worked with the team and applied what we learned from the design process with Venture Inside. It was important to us that the design looks cohesive with Venture Inside.
            <br/><br/>
            The GIF in the tile of this case study is my logo design animated by the talented team at Pigeon Row.</p>
          </div>
        </div>
        <div className="blue-background">
          <img src={require('../images/rbcx/rbcx-logo.png')} alt='My inspiration' className="inspiration-img d-shadow"></img>
          <img src={require('../images/rbcx/yellow.png')} alt='Yellow Design' className="yellow-img"></img>
          <div className="computer-bkg"></div>
          <img src={require('../images/rbcx/my-computer.png')} alt="RBC Sticker on my computer" className="computer-img"></img>
        </div>
        <div className="poster-container">
          <div className="rbcx-img4-cont">
            <img src={require('../images/rbcx/rbcx-poster.png')} alt='RBCX Poster' className="rbcx-img4"></img>
          </div>
          <div className="poster-desc">
            <div className="poster-desc-inner">
              <h2>Isometric Illustration</h2>
              <p>I designed and illustrated this poster to promote RBCx. I was inspired by an ad I saw in the subway station in this isometric style and became hooked. At first, I intended to just play around in illustrator and maybe make it into a Snapchat geofilter or something, but 6 hours later, this happened.
              <br/><br/>
              I call this the idea factory. You can follow the “ideas” out of office building on the left and see it magically turn into bananas, which then goes to power the lights. Of course, the bananas get recycled back into the system because no idea is a rotten idea.
              <br/><br/>
              My proudest moment was when this poster was plastered on the projector during a town hall at the Art Gallary of Ontario, as if it belongs there or something. </p>
            </div>
          </div>
        </div>
        <div className="rbc-wrapper-a">
          <img src={require('../images/rbcx/rbc-dots.png')} alt='' className="rbc-dots"></img>
          <img src={require('../images/rbcx/founder.png')} alt='Founder experience book' className="founder-img"></img>
          <div className="pink-box"></div>
        </div>
        <div>
          <div className="par-block rbcx-text-box playbook-box">
            <h2>RBCx Experience Playbook</h2>
            <p>Alongside Alysse Glick, project lead, we created this playbook to equip founders, consultants, and advisors with the information they need from the very first day to the final pitch. Because this is one of the first thing founders receive at the start of the program, a good impression is key. We wanted them to pick it up and say “wow, this is the coolest shit I’m about to do”.</p>
          </div>
        </div>
        {designThinkingImages}
        <div>
          <div className="par-block rbcx-text-box playbook-box">
            <h2>Design Thinking Workbook</h2>
            <p>Design Thinking is a process developed by IDEO to solve problems. At RBC, we want to empower employees to try new ways of thinking and make them fun. So I designed and illustrated this 20-page workbook as a product for employees to dive deeper into Design Thinking. Whether they are new or already familiar with the Design Thinking Process, this is a great tool to help them bring ideas to life.
            <br/><br/>
            This is probably one of my first end-to-end print design project I’ve ever done, and boy did I mess up big time. At first, I had the slightest idea what bleed lines and crop marks are so the test print did not come out the way I intended it to. After that was fixed and 50 prints later, we discovered like a billion mistakes that weren’t caught in the test run. Thankfully, I work with some of the most understanding folks in the world and turned this thing around. Lessons were learned and absolutely no one was injured.
            <br/><br/>
            Take a <a target="_blank"
                      rel="noopener noreferrer"
                      href={require('../images/rbcx/Design-thinking-workbook.pdf')}>look
            </a>.</p>
          </div>
        </div>
        <div>
          <img src={require('../images/rbcx/our-brand.png')} alt="Our Brand" className="our-brand"></img>
          <img src={require('../images/rbcx/hand-with-cards.png')} alt="Hand with cards" className="hand-cards"></img>
          <div className="par-block rbcx-text-box">
            <h2>People like information in bite sizes</h2>
            <p>This set of trading cards I designed were passed out at town halls and expos to introduce and break down the concept of problem-solving through Design Thinking. They were a huge hit and I especially loved seeing people sifting through the pile trying to collect them all as if they were Pokemon cards or something.
          </p>
          </div>
          <img src={require('../images/rbcx/people.png')} alt="People networking" className="people-img"></img>
          <img src={require('../images/rbcx/rocket-banner.png')} alt="Hand with cards" className="rocket-img"></img>
          <div className="par-block rbcx-text-box">
            <h2>Innovation doesn’t have to be complicated</h2>
            <p>Midway through the summer, I wanted to give community engagement a try. So I banded together with a group of interns and brainstormed ways we can get everyone excited about intrapreneurship. We knew it had to be interactive, fun, and accessible, so a pop-up shop quickly came to mind.
            <br/><br/>
            In the past, we’ve used “pipe cleaner prototyping” as an activity to get people thinking on their feet and use their hands to make something tangible, so along with that, we came up with a series of challenges that draws attention to teamwork, problem-solving, and getting you outside of your comfort zone. Some of these challenges include the classic egg drop, spaghetti tower, and building a Rube Goldberg Machine. Oh and VR games, because VR is cool. I wrote more about it
            <a href="https://medium.com/@daihan/a-beginners-guide-to-innovation-b78be55ceda9"
              rel="noopener noreferrer" target="_blank"> here</a>.
            <br/><br/>
            We had such a great turn out that we had to tell people to quiet down at some point because they got too into the challenges. </p>
          </div>
          <img src={require('../images/rbcx/x.png')} alt='' className="bottom-x"></img>
        </div>
      </div>
    );
  }
}

export default RBCX;
