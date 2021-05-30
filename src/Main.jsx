import React, { Component } from 'react';
import Content from './Content.jsx';
import Header from './Header.jsx';
import Intro from './Intro.jsx';
import Footer from './Footer.jsx'
import './Main.css';

import Views from './Views.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this._switchToWork = this._switchToWork.bind(this);
    this.switchView = this.switchView.bind(this);
    this._scrollToTop = this._scrollToTop.bind(this);
    this._scrollToGrid = this._scrollToGrid.bind(this);

    this.state = {
      view: Views.Tiles,
      tileInfo: {}
    }
  }

  _scrollToTop() {
    this.app.scrollTo(0, 0);
  }

  _scrollToGrid() {
    document.getElementById('tile-grid').scrollIntoView(
      {behavior: "smooth", block: "start", inline: "nearest"});
  }

  _switchToWork(options = {}) {
    this.switchView(Views.Tiles)
    if (options.scrollDown) {
      setTimeout(this._scrollToGrid, 100);
    }
  }

  /* Switches to the provided newView. Passes the provided tileInfo to the new view */
  switchView(newView, tileInfo={}) {
    this._scrollToTop();
    this.setState({ view: newView })
    this.setState({ tileInfo: tileInfo })
  }

  render() {
    return (
      <div className="App" ref={(app) => this.app = app}>
        <Header
          goHome={this._switchToWork}
          switchView={this.switchView}
        />
        <Intro
          view={this.state.view}
        />
        <Content
          view={this.state.view}
          tileInfo={this.state.tileInfo}
          switchView={this.switchView}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
