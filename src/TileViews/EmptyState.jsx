import React, { Component } from 'react';
import './EmptyState.css';
import '../ContentWrapper.css'

class EmptyState extends Component {
  render() {
    return (
      <div className="empty-state">
        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/emptyState/original.png')} alt='Original State' className="content-img"></img>
          </div>
          <div className="content-caption">
            <h1>Empty State Illustrations</h1>
            <p className="content-desc">
              OpenText Content Server is a cloud-based enterprise storage software trusted by millions of users. While it is primarily a desktop tool, a mobile app was developed to make content management more easily accessible and user-friendly. As opposed to most other apps, the goal here is not user retention; the fewer roadblocks to getting work done, the better. Also, who says enterprise software can’t have personalities? Therefore, I was asked by the OpenText team to re-imagine the empty states of the mobile app in order to delight, inform, and provide a positive user experience.
              <br/><br/>
              This project was completed over three weeks, with guidance and support from the OpenText Visual Design Team.
            </p>
          </div>
          <div className="side-caption original-state-caption">
            <h2>Before</h2>
            <p>The current empty states show the same icon users click when navigating from. They are often overlooked in the design process due to the small amount of time they actually get seen by users, but nevertheless, when they do appear, it is usually at a critical stage of user interaction, whether they are new and just starting to explore the app, or in a moment of frustration because something has gone wrong.
            <br/><br/>
            A well-designed empty state can provide great impressions to your user. It shows attention to detail and contributes to the overall experience of the product, especially when the user least expects it. Just because it’s an enterprise software, there’s no excuse to not provide a top-notch user experience, at the end of the day, there’s definitely a human in the cubicle.
            <br/><br/>
            On top of all that, the current empty states have some great copywriting, so why not have some great illustrations to go with it?
            </p>
          </div>
          <div className="par-block">
            <h2>The goal</h2>
            <p className="goal-text">Design the current empty states with illustrations that reflect the scenarios users might encounter while interacting with the app. While I was given the freedom and creativity to explore, I wanted to set a few goals in order to measure success later on:
              <br/><br/>
              •  Make the in-app experience more friendly, personable and turn a moment of loss or frustration into something funny and relatable
              <br/><br/>
              •  Guide new users to discover a feature and act as an extension to the user onboarding
              <br/><br/>
              •  The illustrations should be flexible, adaptable and easy to implement by development
              <br/><br/>
              •  Begin the establishment of an illustration style as there are currently no illustrations within the product
            </p>
          </div>
          <div className="clear-float"></div>
          <div className="captioned-pic">
            <img src={require('../images/emptyState/inspiration.png')} alt='My inspiration' className="empty-state-img es-img2"></img>
            <p>Works from Jira, Dropbox, OpenText Marketing, and my own all served as a good starting point </p>
          </div>
          <img src={require('../images/emptyState/shapes.png')} alt='Shapes and Colours' className="empty-state-img es-img2"></img>
          <div className="side-caption">
            <h2 className="inspiration-caption">Discovery</h2>
            <p>I started off by going through the internet, articles, and the product itself to gather as much relevant information as I could find to serve as inspiration. Thankfully, there is a ton of stuff out there that provided a good foundation.
            <br/><br/>
            While there are established illustration standards from Marketing, product illustrations don’t necessarily speak the same language. Marketing illustration is often used to highlight the features, while product illustrations usually find refuge sparingly and assist the user to convey meaningful information. </p>
            <h2>Experimentation</h2>
            <p>With that being said, I began experimenting with elements such as shapes and color combinations. Working off of a dark gradient background, I stayed away from using contrasting colors and played with gradient and opacity instead. Even though the current background creates a form of constraint, There needs to be the flexibility of the colors to be reused against other backgrounds.</p>
          </div>
          <div className="clear-float"></div>
          <div className="par-block">
            <h2>Sketches</h2>
            <p>Next, I grabbed my pen and paper and sketched out as many scenes as I could. Sketching has always been my favorite part of the design process. I went through pages of rough drawings without worrying too much about what it looks like. My goal here is to take each scenario and come up with as many ways as I can using illustrations to convey the meaning effectively.
            <br/><br/>
            Once I got some initial feedback with the drawings, I went into illustrator and roughly sketched out the outlines to get an idea of how they would look against the background gradient. One of my initial thoughts is to create illustrations of people interacting with elements that are larger than life, like in a surrealistic tech world. But the problem is that small details will not be effective in conveying the story aspect, as well, it will take a bigger cognitive load for the users. The simpler the better. So with that, the little guy below on the right is what came from it. I decided to illustrate it in detail on my own time in my personal style because I liked the concept so much.
            </p>
          </div>
        </div>
        <img src={require('../images/emptyState/mid-header.png')} alt='Mid Header' className="mid-header"></img>
        <div>
          <div className="par-block">
            <h2>Getting feedback</h2>
            <p>
            Along the way, I have consistently bothered the team for feedback. They are all incredibly helpful in making sure I’m going in the right direction by asking me if I have thought of doing it another way, giving suggestions, and sending me resources that might help.
            <br/><br/>
            One thing I’m still trying to work on is to stop packaging my unfinished work nicely just for feedback. At first, it was quite daunting to show my messy art-boards to the people around me. But I quickly realized that everyone is constantly asking and providing feedback on their own work in the process regardless of where they are, it became easier and easier.</p>
            <h2>Iterations</h2>
            <p>
            From the feedback, I went back to my sketches and did a few more. But this time, with more detail and intention. Next, I took a picture of the sketches and placed it next to my artboard. At this stage, I really like working in illustrator because you can take advantage of copy-paste and make adjustments as needed. I basically started off with a few common illustrations such as a file folder and documents and went from there. Basically, lots and lots of iterations happened at this stage.</p>
            <h2>Consistency</h2>
            <p>
            Consistency plays a huge role in making the illustration look like they are part of the same product. I went into illustrator starting with some common elements such as lines, dashes, and curves. The bursting circle and dots from previous marketing illustrations worked really well in making the design more fun and whimsical, so I added them to the pile of components I could reuse.
            <br/><br/>
            For consistency, all strokes are set at 2pt weight with rounded corner and stroke cap. Colors are also used sparingly alongside the white for main outlines. Finally, circles with lowered opacity are added for additional depth and they are set at either 30% or 70%, I like odd numbers.</p>
          </div>
          <img src={require('../images/emptyState/12-phones.png')} alt='Empty States' className="es-img3"></img>
          <div className="par-block">
            <h2>Almost there</h2>
            <p>So like, it’s often a challenge to know when the work is complete. For every project I work on, once "done", I ask myself how can I make this better? So feedback is important. I’ve worked with clients in the past where my definition of halfway there is nearly perfect. So the image above is what I send out to the rest of the team in addition to the few I’ve been getting consistent feedback from. The goal here is to narrow down to one concept for each screen.</p>

             <h2>Tweaks</h2>
             <p>I got lots of positive feedback from the team and in a few cases, it was hard to choose between the two. While in other cases, one was obviously stronger than the other. For example, in 6B, the perspective of the illustration is not consistent with the rest as well as the shadow, so that was taken out. I also played around with the smaller details with lines and dots to ensure balance throughout the screens. Essentially, every little detail was looked at and everything served a purpose.
             <br/><br/>
             Below are the final screens, the background color got a refresher as well. Also note that the version that will be shipped will no longer show the text in italic, in order to accommodate language accessibilities.</p>

          </div>
        </div>
        <img src={require('../images/emptyState/emptyall.png')} alt='More Empty States' className="mid-header"></img>
        <div>
          <div className="par-block">
            <h2>Just getting started</h2>
            <p>The team loved the illustrations for mobile and requested them to be adapted for desktop use. So here they are!
            <br/><br/>
            Even though the illustrations were made against the blue gradient background, I’ve identified earlier that they may need to be adapted for various color backgrounds. Therefore, the strokes and fills are grouped in a way that can be easily modified.
             </p>
          </div>
        </div>
        <img src={require('../images/emptyState/mock-up.png')} alt='Nodes List' className="es-img4"></img>
        <div>
          <div className="par-block">
             <h2>Looking back </h2>
             <p>
             I’m so excited to be able to share this with you. Creating beautiful and functional illustrations is what makes me tick and I’m so grateful to be given the freedom and trust to make these for OpenText. Throughout my research, I’ve come across many great case studies and inspirations about their process behind creating empty states. They all helped me in one way or another in creating my own.
              <br/><br/>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://ux.shopify.com/empty-states-more-like-you-have-no-idea-how-much-work-goes-into-those-states-amirite-e0102f58b64e">Empty States? More like You-Have-No-Idea-How-Much-Work-Goes-Into-Those States, amirite?? - By Meg Robichaud for Shopify</a>
              <br/><br/>
              <a target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/dropbox-design/illustrating-a-more-human-brand-part-1-e1cfe3c28d9">Illustrating a more human brand - By Michael Jeter for Dropbox Design</a>
              <br/><br/>
               <a target="_blank"
                 rel="noopener noreferrer"
                 href="https://www.invisionapp.com/blog/why-empty-states-deserve-more-design-time/">Why empty states deserve more design time - By Dina Chaiffetz for InVision</a>
               <br/><br/>
               Thanks for reading!
            </p>

            </div>
            <img src={require('../images/emptyState/end.png')} alt='More Empty States' className="es-bottom"></img>
          </div>
      </div>


    );
  }
}

export default EmptyState;
