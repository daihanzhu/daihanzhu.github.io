import React, { Component } from 'react';
import './RBCX.css';
import '../ContentWrapper.css'

class EmptyState extends Component {
  render() {
    return (
      <div className="rbcx">
        <div className="rbcx-header content-header"></div>
        <div className="content-wrapper">
          <div className="content-title">
            <h1>RBCX - Powered by Venture Inside RBC</h1>
          </div>
          <p className="content-desc">In summer 2017, I joined the Intrapreneurship team (Venture Inside) as their first ever design intern at the RBC Royal Bank of Canada. Our mission was to challenge and enable RBC employees around the globe to solve important problems, develop product thinking, and innovate much like entrepreneurs, but with the resource of a multinational company.
            <br/><br/>
            RBCx is a startup accelerator program powered by Venture Inside that puts employees through an intensive 10-week program to solve big, disruptive problems. From my very first day, I was thrown right into the action and worked with the venture teams to develop their ideas into a prototype. From there, I worked closely with the managing team to re-design the branding for both Venture Inside and RBCx, as well as multiple resources on topics such as Design Thinking and problem pitching.</p>
          <img src={require('../images/rbcx/our-brand.png')} alt='Original State' className="rbcx-img rbcx-img2"></img>
          <h2>What is our brand?</h2>
          <p>When I first started, both Venture Inside and RBCx were in their early days, much like a startup in itself. Our biggest goal was to spread the words about our exsistance to gauge interest internally. So, at each townhall and expo, we put the thought into creating experiences that is both interactive and unique to simulate an entrepreneurial mindset.
            <br/><br/>
            Such as these trading cards I designed, they helped introduce and break down the concept of problem solving through Design Thinking.
            <br/><br/>
            This led to many brainstorming sesh on what we want to convey through our brand. Who are we and what do we do? Slowly, the picture is starting to take shape. </p>
          <div className="clear-float"></div>
          <img src={require('../images/rbcx/rbcx-logo.png')} alt='My inspiration' className="rbcx-img3"></img>
          <div className="par-block">
            <h2>Gather inspiration</h2>
            <p>First, I wanted to gather inspirations from other similar products and see how they approach empty states. Sort of like building a moodboard with research to build a good foundation to work on.</p>
            <h2>Shapes and colour</h2>
            <p>Next, I began experiementing with shapes and colour combinations. One of the constrains of the illustrations is that they have to appear against a dark gradient background. There might also be the possibility of alternative usage for the illustrations so they shoud be flexible and reuseable. I played with different combinations of shapes and lines and decided to keep the illustrations simple and use solid shapes and lines with rounded end caps as a starting point.</p>
          </div>
        </div>
        <img src={require('../images/rbcx/rbc-dots.png')} alt='Mid Header' className="mid-header rbc-dots"></img>
        {/* TODO: Beyond this point is empty state content */}
        <div className="content-wrapper">
          <h2>Actually doing it</h2>
          <p className="rbcx-desc">When I brough the sketches into illustrator, I got some valuable feedback on which sketch might work the best with each screen. I took some elements of previously created illustrations from product marketing since it worked really well in making the drawings come to life. This was also helpful since consistency and making the drawings feel like they belong in a set was something I had intentions for.
          <br/><br/>
          Oh, and yes, I tried really hard to sneak a cat in there somehow. </p>
          <h2>Getting feedback</h2>
          <p className="rbcx-desc">Along the way, I have consistently bothered a few of my co-workers for feedback. They are all incrediabily helpful in making sure I’m going in the right direction by asking me if I have thought of doing it another way, giving suggestions, and sending me resources that might help.
          <br/><br/>
          One thing I’m still trying to work on is stop packaging up my unfinished work up nicely just for getting feedback. At first, it was quite daunting to show my messey half-finished art-boards to the people around me. But I quickly realized that everyone is always asking and providing feedback on their work in process regardless of where they are at, and yes, we all have the disorganized artboards to untangle at some point.</p>
          <img src={require('../images/emptyState/12-phones.png')} alt='Empty States' className="rbcx-img3"></img>
          <h2>Looking back</h2>
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
          <h2>The Final Set</h2>
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:
            I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
        </div>
        <img src={require('../images/emptyState/emptyall.png')} alt='More Empty States' className="mid-header"></img>
        <div className="content-wrapper">
          <h2>Looking back</h2>
          <p className="rbcx-desc">I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS: I make empty states :monkaS:</p>
        </div>
        <img src={require('../images/emptyState/coffee.png')} alt='Empty States' className="rbcx-img3"></img>
      </div>
    );
  }
}

export default EmptyState;
