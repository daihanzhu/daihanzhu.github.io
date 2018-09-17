import React, { Component } from 'react';
import classNames from 'classnames';
import Content from './Content.jsx';
import Footer from './Footer.jsx'
import './Main.css';

import Views from './Views.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this._switchToAbout = this._switchToAbout.bind(this);
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

  _switchToAbout() {
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
        <div className='App-header'>
          <div className='navbar'>
            <div className='name-box'>
              <div className='red-rectangle'></div>
              <button onClick={this._switchToWork} className="my-name">D A I H A N</button>
            </div>
            <button className="hamburger" onClick={this._toggleMenu}>
              <img src={require('./images/hamburger.svg')} alt="Menu"></img>
            </button>
            <div className={pagesBoxClassName}>
              <button onClick={this._switchToWork}>work</button>
              <button onClick={this._switchToAbout}>about</button>
            </div>
          </div>
          { backBtn }
        </div>
        <Content view={this.state.view} switchView={this.switchToTileView}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
