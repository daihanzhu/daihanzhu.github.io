import React, { Component } from 'react';
import Content from './Content.jsx';
import CardTab from './CardTab.jsx';
import './Main.css';

import Views from './Views.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this._switchToAbout = this._switchToAbout.bind(this);
    this._switchToWork = this._switchToWork.bind(this);
    this._switchToStories = this._switchToStories.bind(this);

    this.state = {
      view: Views.Tiles
    }
  }

  _switchToAbout() {
    this.setState({ view: Views.About });
  }

  _switchToWork() {
    this.setState({ view: Views.Tiles });
  }

  _switchToStories() {
    this.setState({ view: Views.Stories });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="my-name">D A I H A N</div>
          <a onClick={this._switchToWork}>work</a>
          <a onClick={this._switchToStories}>stories</a>
          <a onClick={this._switchToAbout}>about</a>
        </div>
        <h1 className="App-title">Welcome to Dana's shitty website</h1>
        <div className="content-card-wrapper">
          <Content view={this.state.view}/>
          <div className="App-footer"></div>
          <CardTab onClick={this._switchToAbout} onClick2={this._switchToStories}/>
        </div>
      </div>
    );
  }
}

export default Main;
