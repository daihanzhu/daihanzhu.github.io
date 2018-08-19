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
    let appHeaderClassName = classNames({
      'App-header': true,
      'no-title': this.state.view !== Views.Tiles
    });

    let pagesBoxClassName = classNames ({
      'pages-box': true,
      'unhidden': this.state.showMenu
    });

    return (
      <div className="App" ref={(app) => this.app = app}>
        <div className={appHeaderClassName}>
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
              <button onClick={this._switchToStories}>stories</button>
              <button onClick={this._switchToAbout}>about</button>
            </div>
          </div>
          <div className='content-wrapper'>
            <h1 className='App-title' hidden={this.state.view !== Views.Tiles}>
              Designer + illustrator
            </h1>
            <h2 className="App-intro" hidden={this.state.view !== Views.Tiles}>
              👋 Oh hi, if you are looking for Dana's shitty website, you've come to the right place.
            </h2>
          </div>
        </div>
        <Content view={this.state.view} switchView={this.switchToTileView}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
