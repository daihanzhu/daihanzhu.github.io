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
      <h3>How did you become a product designer</h3>
      <p className="daihan-desc">
        When it was time to apply for universities, I was having a hard time finding something I feel passionate about, or even having a slight interest in. While debating between teaching and marketing, I came across a degree called Global Business and Digital Arts on Instagram (how else). It happens to have an emphasis on User Experience Design, which is something I’ve never heard of, but natually gravitated towards. So I packed my bags and moved across the country.
        <br/><br/>
        I love being a product designer. There’s no better feeling than to hear “I didn’t know I needed this!” from a user. I’m grateful to have found my passion so early and I hope that for you too.
      </p>
      <h3>How do I become a product designer</h3>
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
      <h3>How did you make your portfolio</h3>
      <p className="daihan-desc">I designed it in Figma. It is developed using React by <a href="https://walinga.github.io" rel="noopener noreferrer" target="_blank"> Matthew</a>.</p>
      <h3>Can you critique my portfolio</h3>
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
      <h3>Are you open to work</h3>
      <p className="daihan-desc">
        Depends. Please Email me a brief overview of your project and budget and I’ll be in touch.
        <br/><br/>
        If I’m unavaliable, there is a good chance I know the prefect person who is!
      </p>
      <h3>What kind of work do you do</h3>
      <ul>
        <li>Website design + development</li>
        <li>Product + editorial illustrations</li>
        <li>Workshop Facilitation + Speaking</li>
        <li>Cat drawings</li>
      </ul>
      <p className="daihan-desc">
        At the moment, I’m not open to freelance UI/UX work, it requires a lot more bandwidth than I have available, but I do have recommendations.
      </p>
      <h3>What is your rate</h3>
      <p className="daihan-desc">
        Depends. To give you a general idea, on average I start at $95/hour. For educational/non-profits, I’m more than happy to work within your budget.
      </p>
      <h3>What can we expect?</h3>
      <p className="daihan-desc">
        Once we decide to move forward, we will hop on a call to get to know each other and chat about the project. Sounds like the perfect first date!
        <br/><br/>
        I will then prepare a proposal with timeline, action items, the works for us to be on the same page. Throughout the duration, I will keep you updated with progress and regular check-ins.
        <br/><br/>
        Finally, once it’s signed off, it’s time to pop some champagne!
      </p>
    </div>);
  }

  sectionCContent() {
    return (<div className="daihan-caption">
      <h3>Favorite place you’ve traveled</h3>
      <p className="daihan-desc">
        A tough choice between Cartagena, Colombia, and the Sahara Desert in Morocco. Colombia for the ceviche and vibrant colors. Morocco for that feeling of disbelief.
        <br/><br/>
        One thing is certain though, I go where the food is.
      </p>
      <h3>Where to next</h3>
      <p className="daihan-desc">
        New Zealand or Fiji. Then Antarctica to check off every continent.
      </p>
      <h3>Coffee or Tea</h3>
      <p className="daihan-desc">
        Boba.
      </p>
      <h3>If you weren’t a designer, what would you be</h3>
      <p className="daihan-desc">
        I’ve always thought I wanted to become a teacher, and I almost went down that route. They really shouldn’t allow 17-year-olds to make decisions like that.
      </p>
      <h3>Ok, honestly what do you want to do instead</h3>
      <p className="daihan-desc">
        A farmer.
      </p>
      <h3>Why aren’t you replying to my text</h3>
      <p className="daihan-desc">
        I don’t...um...own a cell phone.
      </p>
      <h3>Where do you live</h3>
      <p className="daihan-desc">
        I currently live in Calgary, Canada. Which is the traditional territories of the people of the Treaty 7 region in Southern Alberta. Calgary is also home to Métis Nation of Alberta, Region 3.
        <br/><br/>
        It is situated on land where the Bow River meets the Elbow River, and the traditional Blackfoot name of this place is “Mohkinstsis” which we now call Calgary.
      </p>
      <h3>Where are you from</h3>
      <p className="daihan-desc">
        I did most of my growing up in Edmonton, Alberta, so there.
      </p>
      <h3>Where are you really from</h3>
      <p className="daihan-desc">
        According to 23&Me, I’m 98.4% Chinese 0.9% Central Asian, and 0.7% Korean :p
      </p>
    </div>);
  }

  render() {
    const sectionA = this.buildSection('On Design', this.sectionAContent())
    const sectionB = this.buildSection('On Work', this.sectionBContent())
    const sectionC= this.buildSection('On Life', this.sectionCContent())

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
            src={require('./images/daihan-on-steps.png')} alt='Me sitting on some steps'>
          </img>
        </div>
        <div className="daihan-caption">
          {sectionB}
        </div>
      </div>
      <div className="intro">
        <div className="daihan-image-wrapper">
          <img
            src={require('./images/daihan-falling-steps.png')} alt='Me almost falling off the steps'>
          </img>
        </div>
        <div className="daihan-caption">
          {sectionC}
        </div>
      </div>
    </div>);
  }
}

export default QAndA;
