import React, { Component } from 'react';
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
        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={require('../images/kudos.png')} alt='Kudos UI Home' className="content-img tileImg"></img>
            <div className="content-mini-caption">Home</div>
          </div>
          <div className="content-caption">
            <h1>Giving Recognition</h1>
            <p className="content-desc">
              Kudos is an Enterprise Employee Recognition Platform enabling teams in 80+ countries to build meaningful connections, increase performance, and strengthen values.
              <br/><br/>
              As the only designer, I worked closely with product and engineering to ship a better, more intuitive recognition-first experience
            </p>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <h1>Old Experience</h1>
            <img src={this._fetchImage('old-experience.png')} alt='Kudos UI User Profile (Old)' className="shadowed-img content-img"></img>
            <div className="content-mini-caption">User Profile</div>
          </div>
          <div className="content-img-wrapper">
            <h1>New Experience</h1>
            <img src={this._fetchImage('new-experience.png')} alt='Kudos UI User Profile (New)' className="shadowed-img content-img"></img>
            <div className="content-mini-caption">User Profile</div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-caption">
            <h1>Mobile, Integrations and more</h1>
            <p className="content-desc">In addition, I designed the experience of our mobile apps as well as multiple integrations to achieve a consistent experience across our product ecosystem.
                <br/><br/>
                Check ‘em out!
            </p>
            {this.appLinks()}
          </div>
          <div className="content-img-wrapper">
            <img src={this._fetchImage('phones.png')} alt='Kudos Mobile App' className="content-img"></img>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content-img-wrapper">
            <img src={this._fetchImage('process.png')} alt='Get in touch' className="content-img"></img>
          </div>
          <div className="content-caption">
            <h1>The Process</h1>
            <p className="content-desc">To learn more about the design process, please get in touch. </p>
          </div>
        </div>
      </div>

    );
  }
}

export default Kudos;
