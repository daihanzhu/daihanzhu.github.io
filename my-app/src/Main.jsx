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

  componentDidUpdate() {
    this.app.scrollTo(0, this.cw.offsetTop);
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
      <div className="App" ref={(app) => this.app = app}>
        <div className="App-header">
          <div className="my-name">D A I H A N</div>
          <a onClick={this._switchToWork}>work</a>
          <a onClick={this._switchToStories}>stories</a>
          <a onClick={this._switchToAbout}>about</a>
        </div>
        <h1 className="App-title">Welcome to Dana's shitty website</h1>
        <div className="content-card-wrapper" ref={(cw) => this.cw = cw}>
          <Content view={this.state.view}/>
          <div className="App-footer"></div>
          <div className="card-tab-wrapper">
            <CardTab onClick={this._switchToAbout}/>
            <CardTab onClick={this._switchToStories}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
