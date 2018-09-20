import React, { Component } from 'react';
import './About.css';
import './ContentWrapper.css'
import AboutBlock from './AboutBlock.jsx'

import aboutData from './AboutData.json';

class About extends Component {
  constructor(props) {
    super(props)
    this._fetchImage = this._fetchImage.bind(this);
  }

  _fetchImage( name ) {
    return require( `./images/${name}` );
  }

  render() {
    let rightAligned = false;

    const blocks = aboutData.map((item) =>
        <AboutBlock
          key={item.title}
          title={item.title}
          desc={item.description}
          image={item.image ? this._fetchImage(item.image) : null}
          altText={item.image}
          rightAligned={ rightAligned = !rightAligned }
        />
    );

    return (
      <div className="about">
        <div className="content-wrapper">
          <div className="shape-container">
            <div className="rectangle"></div>
            <div className="daihan-who"></div>
          </div>
          <div className="daihan-caption">
            <h1>Who I am</h1>
            <br/>
            <p className="daihan-desc">Aside from being a designer (I hope you got that by now), I’m an occasional cat-sitter, writer, and entrepreneur. In the past, I’ve been a book shelver, curler, and guilty of over-filtering my Instagram photos. In the future, I would like to grow my own avocados.<br/>
            <br/>
            For the time being, I make a lot of mistakes and I’m overly curious about everything around me.<br/>
          </p>
          </div>
          <div className="clear-float"></div>
          {blocks}
          <h1>Stuff I care about</h1>
          <p>The word community means the world to me, and bringing people together is at the core of what I do. Currently, I'm building a more inclusive entrepreneurial community at the heart of innovation - the University of Waterloo.</p>
          <h3>MY COMMUNITIES</h3>
             <li><a href="https://uwaterloo.ca/housing/werc" target="_blank">WERC</a></li> 
             <li><a href="https://designx.community/" target="_blank">DesignX</a></li>
             <li><a href="http://www.feds.ca/" target="_blank">Feds</a></li>

             <li><a href="http://velocity.uwaterloo.ca" target="_blank">Velocity</a></li> 
             <li><a href="https://uwaterloo.ca/arts-student-union/" target="_blank">Arts Student Union</a></li>
             <li><a href="https://www.edmonton.ca/programs_services/for_children_kids_youth/youth-programs.aspx" target="_blank">Leaders in Training</a></li>

             <li><a href="https://www.edmonton.ca/programs_services/for_children_kids_youth/leaders-in-training-photo-gallery.aspx" target="_blank">City of Edmonton</a></li>
             <li><a href="https://www.epl.ca/browse_program/makerspace/" target="_blank">EPL Makerspace</a></li>
             <li><a href="https://www.residence.ualberta.ca/current-residents/residence-associations" target="_blank">Michener Park</a></li>


             <h1>People I like</h1>
             <p>I work with some amazing people, let me make an intro!</p>
             <h3>DESIGNERS</h3> 
             <li><a href="http://alysseglick.com/" target="_blank">Alysse Glick</a></li>  
             <li><a href="https://medium.com/@nspace" target="_blank">Thomas Lowry</a></li>
             <li><a href="http://www.kslicecreative.com/" target="_blank">Komal Javed</a></li>  
             
             <h3>DEVELOPERS</h3>     
             <li><a href="https://walinga.github.io/" target="_blank">Matthew Walinga</a></li>
             <li><a href="https://github.com/Vaibhav" target="_blank">Vaibhav Khaitan</a></li>
             <li><a href="https://github.com/harman666666" target="_blank">Harman Singh</a></li> 

             <h3>ENTREPRENEURS</h3>   
             <li><a href="https://www.linkedin.com/in/cassie-myers-0379a79a/" target="_blank">Cassie Myers</a></li>
             <li><a href="https://www.linkedin.com/in/amitmehta96/" target="_blank">Amit Mehta</a></li>
             <li><a href="https://www.linkedin.com/in/vishal-vinod-6591667a/" target="_blank">Vishal Vinod</a></li>
             

             <h1>Things other people said about me</h1>
             <p>- “Who’s Daihan?” - Her cats</p>
                 
        </div>
        <img src={require('./images/antwerp.png')} alt="Me in Antwerp" className="about-footer"></img>
      </div>     

    );
  }
}

export default About;
