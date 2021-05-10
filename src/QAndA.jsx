import React, { Component } from 'react';
import './QAndA.css';

class QAndA extends Component {
  buildSection(title, content) {
    return (<div className="qanda-dropdown">
      <h2>{title} --------</h2>
      {content}
    </div>);
  }

  sectionAContent() {
    return (<div className="daihan-caption">
      <h1>How did you become a product designer</h1>
      <p className="daihan-desc">
        When it was time to apply for universities, I was having a hard time finding something I feel passionate about, or even having a slight interest in. While debating between teaching and marketing, I came across a degree called Global Business and Digital Arts on Instagram (how else). It happens to have an emphasis on User Experience Design, which is something I’ve never heard of, but natually gravitated towards. So I packed my bags and moved across the country.
        <br/><br/>
        I love being a product designer. There’s no better feeling than to hear “I didn’t know I needed this!” from a user. I’m grateful to have found my passion so early and I hope that for you too.
      </p>
      <h1>How do I become a product designer</h1>
      <p className="daihan-desc">
        Many ways. My path happend to be linear but it absolutely does not have to be. You don’t need a degree for starters. When building a design team, we look for complimentary skillsets and perspectives so there’s no such thing as a cookie cutter designer.
        <br/><br/>
        My advice is to design and re-design as many solutions to problems you’ve encountered in the real world as possible. Get feedback, and repeat. This’ll get you to start problem solve right away and learn from each iteration. Then present your work in a portfolio and you are well on your way.
        <br/><br/>
        For resources, here are a few I’ve found helpful:
      </p>
      <ul>
        <li>Design C</li>
        <li>Design X</li>
      </ul>
      <h1>How did you make your portfolio</h1>
      <p className="daihan-desc">I designed it in Figma. It is developed using React by <a href="https://walinga.github.io" rel="noopener noreferrer" target="_blank"> Matthew</a>.</p>
      <h1>Can you critique my portfolio</h1>
      <p className="daihan-desc">
        Yes! You can <a href="mailto:daihanzhu@gmail.com"
          rel="noopener noreferrer"
          target="_blank"> Email </a> me or message me on <a href="https://www.linkedin.com/in/daihan/"
                rel="noopener noreferrer"
                target="_blank">LinkedIn</a>.
      </p>
    </div>);
  }

  sectionBContent() {
    return (<div className="daihan-caption">
      <h1>Are you open to work</h1>
      <p className="daihan-desc">
        Depends. Please Email me a brief overview of your project and budget and I’ll be in touch.
        <br/><br/>
        If I’m unavaliable, there is a good chance I know the prefect person who is!
      </p>
      <h1>What kind of work do you do</h1>
      <ul>
        <li>Website design + development</li>
        <li>Product + editorial illustrations</li>
        <li>Workshop Facilitation + Speaking</li>
        <li>Cat drawings</li>
      </ul>
      <p className="daihan-desc">
        At the moment, I’m not open to freelance UI/UX work, it requires a lot more bandwidth than I have available, but I do have recommendations.
      </p>
      <h1>What is your rate</h1>
      <p className="daihan-desc">
        Depends. To give you a general idea, on average I start at $95/hour. For educational/non-profits, I’m more than happy to work within your budget.
      </p>
      <h1>What can we expect?</h1>
      <p className="daihan-desc">
        Once we decide to move forward, we will hop on a call to get to know each other and chat about the project. Sounds like the perfect first date!
        <br/><br/>
        I will then prepare a proposal with timeline, action items, the works for us to be on the same page. Throughout the duration, I will keep you updated with progress and regular check-ins.
        <br/><br/>
        Finally, once it’s signed off, it’s time to pop some champagne!
      </p>
    </div>);
  }

  render() {
    const sectionA = this.buildSection('On Design', this.sectionAContent())
    const sectionB = this.buildSection('On Work', this.sectionBContent())

    return (<div className="q-and-a">
      <div className="intro">
        <div className="daihan-image-wrapper">
          <img
            src={require('./images/daihan-sittin.png')} alt='Me sitting around'>
          </img>
        </div>
        <div className="daihan-caption">
          <h1>You have questions, I (may) have answers</h1>
          {sectionA}
        </div>
      </div>
      <div className="intro">
        <div className="daihan-image-wrapper">
          <img
            src={require('./images/daihan-sittin.png')} alt='Me sitting around'>
          </img>
        </div>
        <div className="daihan-caption">
          {sectionB}
        </div>
      </div>
    </div>);
  }
}

export default QAndA;
