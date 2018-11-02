import React, { Component } from 'react';
import classNames from 'classnames';
import Content from './Content.jsx';
import Footer from './Footer.jsx'
import './Main.css';

import Views from './Views.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this.switchToAbout = this.switchToAbout.bind(this);
    this._switchToWork = this._switchToWork.bind(this);
    this._switchToStories = this._switchToStories.bind(this);
    this.switchToTileView = this.switchToTileView.bind(this);
    this._toggleMenu = this._toggleMenu.bind(this);
    this._scrollToTop = this._scrollToTop.bind(this);

    this.state = {
      view: Views.Tiles
    }
  }

  _scrollToTop() {
    this.app.scrollTo(0, 0);
  }

  switchToAbout() {
    this._scrollToTop();
    this.setState({ view: Views.About });
  }

  _switchToWork() {
    this._scrollToTop();
    this.setState({ view: Views.Tiles });
  }

  _switchToStories() {
    this._scrollToTop();
    this.setState({ view: Views.Stories });
  }

  switchToTileView(tileView) {
    this._scrollToTop();
    this.setState({ view: tileView })
  }

  _toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    let pagesBoxClassName = classNames ({
      'pages-box': true,
      'unhidden': this.state.showMenu
    });

    const backBtn = this.state.view === Views.Tiles ?
      null : (<button onClick={this._switchToWork} className='back-btn'>
        <div className='back-arrow' label="BACK"></div>
      </button>);

    return (
      <div className="App" ref={(app) => this.app = app}>
        { backBtn }
        <Content
          view={this.state.view}
          switchView={this.switchToTileView}
          switchToAbout={this.switchToAbout}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
