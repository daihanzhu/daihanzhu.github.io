import React, { Component } from 'react';
import CardTab from './CardTab.jsx';
import './Main.css';

import Views from './Views.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this._switchToAbout = this._switchToAbout.bind(this);
    this._switchToWork = this._switchToWork.bind(this);
    this._switchToStories = this._switchToStories.bind(this);
    this._goHome = this._goHome.bind(this);

    this.state = {
      view: Views.Tiles
    }
  }

  componentDidUpdate() {
    this.app.scrollTo(0, this.cw.offsetTop);
  }

  _switchToAbout() {
    this.c3.onTabClick();
  }

  _switchToWork() {
    this.c1.onTabClick();
  }

  _switchToStories() {
    this.c2.onTabClick();
  }

  _goHome() {
    // Temporary! Move down all the tabs once that's implemeneted
    window.location.reload();
  }

  render() {
    return (
      <div className="App" ref={(app) => this.app = app}>
        <div className="App-header">
          <div className="top-bar">
            <a onClick={this._goHome} className="my-name">D A I H A N</a>
            <a onClick={this._switchToAbout}>about</a>
            <a onClick={this._switchToStories}>stories</a>
            <a onClick={this._switchToWork}>work</a>
          </div>
        </div>
        <h1 className="App-title">Welcome to Dana's shitty website</h1>
        <div className="content-card-wrapper" ref={(cw) => this.cw = cw}>
          <CardTab view={Views.Tiles} index={2} autoSelected={true} ref={(c1) => this.c1 = c1}/>
          <CardTab view={Views.Stories} index={1} ref={(c2) => this.c2 = c2}/>
          <CardTab view={Views.About} index={0} ref={(c3) => this.c3 = c3}/>
          <div className="App-footer"></div>
        </div>
      </div>
    );
  }
}

export default Main;
