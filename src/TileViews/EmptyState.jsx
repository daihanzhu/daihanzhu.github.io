import React, { Component } from 'react';
import './EmptyState.css';
import '../ContentWrapper.css'

class EmptyState extends Component {
  render() {
    return (
      <div className="empty-state">
        <div className="empty-state-header content-header"></div>
        <div className="content-wrapper">
          <div className="content-title">
            <h1>Empty State Illustration</h1>
          </div>
          <p className="content-desc">OpenText Content Server is a cloud-based enterprise storage software trusted by millions of users. While it is primarily a desktop tool, a mobile app was developed to make content management more easily accessible and user-friendly. As opposed to most other apps, the goal here is not user retention, but to enable them to get work done fast. Also, who enterprise software has to be boring? Therefore, I was asked by OpenText to re-imaging the empty states of the mobile app in order to delight, inform, and provide a positive user-experience.
          <br/><br/>
          This project roughy spanned over three weeks to completion. With guidance from the OpenText Visual Design Team.</p>
          <img src={require('../images/emptyState/original.png')} alt='Original State' className="empty-state-img es-img1"></img>
          <div className="side-caption">
            <h2 className="original-state-caption">The problem</h2>
            <p>The current empty states use the same icons users are navigating from. They’ve got some great copywriting so why wouldn’t we have some great illustrations to go with it?

            To refresh the current empty states with illustrations that reflect the scenarios users might encounter throughout their interactions with the app.
            </p>
            <h2>The goal</h2>
            <p>The first step is to establish the goals I’d like to achieve with this project. While I was given the freedom and creativity to explore, I wanted to set some personal goals to measure success later on.
              <br/><br/>
              Make the in-app experience more friendly and personable
              <br/><br/>
              Turn a moment of loss or frustration into something funny and hopefully relatable
              <br/><br/>
              Can help guide new users to discover a new feature, act as an extension to the user onboarding
              <br/><br/>
              Begin the establishment of illustration guideline as there are currently no illustrations within the product
            </p>
          </div>
          <div className="clear-float"></div>
          <div className="captioned-pic">
            <img src={require('../images/emptyState/inspiration.png')} alt='My inspiration' className="empty-state-img es-img2"></img>
            <p>Works from Jira, Dropbox, OpenText Marketing, and my own served as a good starting point </p>
          </div>
          <img src={require('../images/emptyState/shapes.png')} alt='Shapes and Colours' className="empty-state-img es-img2"></img>
          <div className="side-caption">
            <h2>Gathering inspiration</h2>
            <p>Since there aren't many previous illustrations to go off of, I looked elsewhere. I gathered as many inspirations from other similar products in order to find a good starting point. While there are established illustraton standards from Marketing, product illustrations don’t nessasarily speak the same language. Marketing illustration are often used to highlight the features, while product, illustration usually find refuge sparingly and assit the user to convey meaningful information.</p>
            <h2>Shapes and colour</h2>
            <p>With that being said, I began experiementing with shapes and colour combinations. Working off of a dark gradient background, I stayed away from using contrasting colors and played with gradient and opacity instead. Even though the current background creates a form of constrain, I ensured the flexibility of the colors can be reused against other backgrounds.</p>
          </div>
          <div className="clear-float"></div>
          <div className="par-block">
            <h2>Sketches</h2>
            <p>Next, I turned to pen and paper and sketched out possible scenes and charactors. Sketching has always been my favourite part of the design process. I went through pages of rough drawings without worring too much about how it looks. My goal here is to take each senarios and come up with as many ways as I can use illustrations to convey the meaning.</p>
          </div>
        </div>
        <img src={require('../images/emptyState/mid-header.png')} alt='Mid Header' className="mid-header"></img>
        <div className="content-wrapper mid-content-wrapper ">
          <div className="par-block">
            <h2>Actually doing it</h2>
            <p>When I brough the sketches into illustrator, I got some valuable feedback on which sketch might work the best with each screen. I took some elements of previously created illustrations from product marketing since it worked really well in making the drawings come to life. This was also helpful since consistency and making the drawings feel like they belong in a set was something I had intentions for.

            Oh, and yes, I had to sneak a cat in there somehow. </p>
            <h2>Getting feedback</h2>
            <p>
            Along the way, I have consistently bothered a few of my co-workers for feedback. They are all incrediabily helpful in making sure I’m going in the right direction by asking me if I have thought of doing it another way, giving suggestions, and sending me resources that might help.

            One thing I’m still trying to work on is stop packaging up my unfinished work up nicely just for getting feedback. At first, it was quite daunting to show my messey half-finished art-boards to the people around me. But I quickly realized that everyone is always asking and providing feedback on their work in process regardless of where they are at, and yes, we all have the disorganized artboards to untangle at some point.</p>
          </div>
          <img src={require('../images/emptyState/12-phones.png')} alt='Empty States' className="es-img3"></img>
          <div className="par-block">
            <h2>Looking back</h2>
            <p>I’m overall very happy with how these turned out. I learned throughout this process is that empty states are no joke. They are some of the first things a new user see when they first download the app. They are also things people see when something didn’t go as planned, but can help turn a moment of frustration to delight.
              <br/><br/>
              I’ve came across many great case studies about their process behind creating great empty states, they have all helped me in one way or another in creating my own.
              <br/><br/>
              Empty States? More like You-Have-No-Idea-How-Much-Work-Goes-Into-Those States, amirite?? By Meg Robichaud
              https://ux.shopify.com/empty-states-more-like-you-have-no-idea-how-much-work-goes-into-those-states-amirite-e0102f58b64e
              <br/><br/>
              Illustrating a more human brand
              https://medium.com/dropbox-design/illustrating-a-more-human-brand-part-1-e1cfe3c28d9
            </p>
            <h2>The Final Set</h2>
            <p>The background color got a refresher as well.</p>
          </div>
        </div>
        <img src={require('../images/emptyState/emptyall.png')} alt='More Empty States' className="mid-header"></img>
        <div className="content-wrapper mid-content-wrapper ">
          <div className="par-block">
            <h2>Just getting started</h2>
            <p>The project isn’t over yet! Since recieving the positive feebacks from mobile, I was asked to create more to go into the desktop app. Some very small adjestments were made to fully optimize it for the different color backgrounds. Here’s what they look like.  </p>
          </div>
        </div>
        <img src={require('../images/emptyState/coffee.png')} alt='Empty States' className="es-img3"></img>
        <div className="es-shape-container">
          <div className="es-shape-thingy"></div>
          <img src={require('../images/emptyState/nodes-list.png')} alt='Nodes List' className="es-img4"></img>
        </div>
      </div>
    );
  }
}

export default EmptyState;
