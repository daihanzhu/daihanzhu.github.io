import React, { Component } from 'react';
import Content from './Content.jsx';
import Header from './Header.jsx';
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
      view: Views.Tiles
    }
  }

  _scrollToTop() {
    this.app.scrollTo(0, 0);
  }

  _scrollToGrid() {
    document.getElementById('tile-grid').scrollIntoView(
      {behavior: "smooth", block: "end", inline: "nearest"});
  }

  _switchToWork(options = {}) {
    this._scrollToTop();
    this.setState({ view: Views.Tiles });
    if (options.scrollDown) {
      setTimeout(this._scrollToGrid, 100);
    }
  }

  switchView(newView) {
    this._scrollToTop();
    this.setState({ view: newView })
  }

  render() {
    return (
      <div className="App" ref={(app) => this.app = app}>
        <Header
          goHome={this._switchToWork}
          switchView={this.switchView}
        />
        <Content
          view={this.state.view}
          switchView={this.switchView}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
