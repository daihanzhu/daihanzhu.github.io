import React, { Component } from 'react';
import Grid from '../Grid.jsx';
import tiles from '../TileData.json';

import './Kudos.css';

class Kudos extends Component {
  _fetchImage( name ) {
    return require( `../images/kudos/${name}` );
  }

  appLinks() {
    return (<div className="app-links">
      <a href="https://apps.apple.com/us/app/kudos/id661254760#?platform=iphone"
            rel="noopener noreferrer"
            target="_blank">
            <img src={this._fetchImage('app-store.png')} alt='App Store' className="app-link-img"></img>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.kudos"
            rel="noopener noreferrer"
            target="_blank">
            <img src={this._fetchImage('play-store.png')} alt='Play Store' className="app-link-img"></img>
          </a>
          <a href="https://appsource.microsoft.com/en-us/product/office/WA200000849?tab=Overview"
            rel="noopener noreferrer"
            target="_blank">
            <img src={this._fetchImage('teams.png')} alt='Teams' className="app-link-img"></img>
          </a>
          <a href="https://appsource.microsoft.com/en-us/product/office/WA200000172?tab=Overview"
            rel="noopener noreferrer"
            target="_blank">
            <img src={this._fetchImage('outlook.png')} alt='Outlook' className="app-link-img"></img>
          </a>
          <a href="https://slack.com/apps/A5BRR7KFH-kudos"
            rel="noopener noreferrer"
            target="_blank">
            <img src={this._fetchImage('slack.png')} alt='Slack' className="app-link-img"></img>
          </a>
        </div>);
  }

  render() {
    return (
      <div className="kudos">
        <div className="content-heading-wrapper">
          <h1 className="content-heading">Increasing workplace happiness through the power of recognition</h1>
          <p>Product Designer | 2019 - 2021 | B2B SaaS, HR tech </p>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/kudos.png')} alt='Kudos UI Home' className="content-img tileImg"></img>
          </div>
          <div className="content-caption">
            <h2>Kudos Employee Recognition Platform</h2>
            <p className="content-desc">
              Kudos is a legacy employee recognition platform enabling enterprise companies in 80+ countries to build meaningful connections, increase performance, and strengthen values. 
              <br/><br/>
              As the founding designer, I collaborated with product and engineering to re-imagine the platform from the ground up into a more intuitive, scaleable, and recognition-first experience
            </p>
          </div>
        </div>

        <div className="content-heading-wrapper">
          <h2>The problem</h2>
          <h1 className="content-heading">How might we increase engagement by empowering employees to adopt a habit of giving meaningful recognition</h1>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h2>Giving recognition should be meaningful and effortless</h2>
            <p className="content-desc">I partnered with product to uncover how employees give (or avoid giving) recognition. Interviews with HR leaders, managers, and team members revealed key friction points and led us to a north star: recognition should be visible, specific, and effortless.
                <br/><br/>
                To support this, I restructured the flow of the recognition experience to start with the who. Next, we workshopped empty state copy to deliver subtle nudges toward writing more thoughtful, meaningful messages.
            </p>
          </div>
          <div className="content-img-wrapper">
            <img src={this._fetchImage('give-form2.png')} alt='Recognition Flow UI' className="content-img"></img>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <h2>Legacy Experience</h2>
            <img src={this._fetchImage('old-experience.png')} alt='Kudos UI User Profile (Old)' className="shadowed-img content-img"></img>
          </div>
          <div className="content-img-wrapper">
            <h2>New Experience</h2>
            <img src={this._fetchImage('new-experience.png')} alt='Kudos UI User Profile (New)' className="shadowed-img content-img"></img>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="content-caption">
            <h2>Seamless design across platforms</h2>
            <p className="content-desc">In addition to leading the redesign of the core web experience, I also designed the Kudos mobile apps and multiple integrations, ensuring a consistent and accessible experience wherever recognition happens.
            </p>
            {this.appLinks()}
          </div>
          <div className="content-img-wrapper">
            <img src={this._fetchImage('phones.png')} alt='Kudos Mobile App' className="content-img"></img>
          </div>
        </div>

        <div className="content-heading-wrapper">
          <h2>Bringing the vision to life</h2>
          <img src={this._fetchImage('kudos-desktop-ui.png')} alt='Kudos Desktop UI' className="content-img"></img>
        </div>

        <div className="content-heading-wrapper">
          <h1>The redesign transformed giving recognition into an indispensable part of the workday</h1>
        </div>

        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={this._fetchImage('process.png')} alt='Get in touch' className="content-img"></img>
          </div>
          <div className="content-caption">
            <h2>What I learned</h2>
            <p className="content-desc">This project reinforced the importance of designing holistically for behavior change rather than just a set of features. By making the experience more visible and easy to use, we fostered a stronger culture of appreciation and happiness that resonated across corporate cultures.
              <br/><br/>
              If you’d like a deeper look at the design process, please get in touch.
            </p>
          </div>
        </div>

        <Grid
          tileData={[tiles[2], tiles[3]]}
          switchView={this.props.switchView}
          heading={"Up next"}
        />
      </div>);
  }
}

export default Kudos;
