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
      view: null
    }
  }

  componentDidUpdate() {
    this.app.scrollTo(0, 0);
  }

  _switchToWork() {
    switch( this.state.view ) {
      case Views.Tiles:
        this.c1.deselect();
        this.setState({ view: null });
        break;
      case Views.About:
        this.c3.deselect();
        // fallthrough
      case Views.Stories:
        this.c2.deselect();
        this.setState({ view: Views.Tiles });
        break;
      default:
        this.c1.select();
        this.setState({ view: Views.Tiles });
    }
  }

  _switchToStories() {
    switch( this.state.view ) {
      case Views.Stories:
        this.c2.deselect();
        this.setState({ view: Views.Tiles });
        break;
      case Views.About:
        this.c3.deselect();
        this.setState({ view: Views.Stories });
        break;
      default:
        this.c1.select();
        this.c2.select();
        this.setState({ view: Views.Stories });
    }
  }

  _switchToAbout() {
    switch( this.state.view ) {
      case Views.About:
        this.c3.deselect();
        this.setState({ view: Views.Stories });
        break;
      default:
        this.c1.select();
        this.c2.select();
        this.c3.select();
        this.setState({ view: Views.About });
    }
  }

  _goHome() {
    switch( this.state.view ) {
      case Views.About:
        this.c3.deselect();
        // fallthrough
      case Views.Stories:
        this.c2.deselect();
        // fallthrough
      case Views.Tiles:
        this.c1.deselect();
        // fallthrough
      default:
        this.setState({ view: null });
    }
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
        <h1 className="App-title">Welcome to Dana's &lt;3 website</h1>
        <div className="content-card-wrapper" ref={(cw) => this.cw = cw}>
          <CardTab
            view={Views.Tiles}
            index={2}
            autoSelected={true}
            onClick={this._switchToWork}
            ref={(c1) => this.c1 = c1}
          />
          <CardTab
            view={Views.Stories}
            index={1}
            onClick={this._switchToStories}
            ref={(c2) => this.c2 = c2}
          />
          <CardTab
            view={Views.About}
            index={0}
            onClick={this._switchToAbout}
            ref={(c3) => this.c3 = c3}
          />
          <div className="App-footer"></div>
        </div>
      </div>
    );
  }
}

export default Main;
