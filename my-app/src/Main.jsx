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

    this.state = {
      view: Views.Tiles
    }
  }

  componentDidUpdate() {
    this.app.scrollTo(0, 0);
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
    let appHeaderClassName = classNames({
      'App-header': true,
      'no-title': this.state.view !== Views.Tiles
    });

    return (
      <div className="App" ref={(app) => this.app = app}>
        <div className={appHeaderClassName}>
          <div className='navbar'>
            <div className='name-box'>
              <div className='red-rectangle'></div>
              <a onClick={this._switchToWork} className="my-name">D A I H A N</a>
            </div>
            <a onClick={this._switchToWork}>work</a>
            <a onClick={this._switchToStories}>stories</a>
            <a onClick={this._switchToAbout}>about</a>
          </div>
          <div className='intro-wrapper'>
            <h1 className='App-title' hidden={this.state.view !== Views.Tiles}>
              Designer + illustrator
            </h1>
            <h2 className="App-intro" hidden={this.state.view !== Views.Tiles}>
              👋 Oh hi, if you are looking for Dana's shitty website, you've come to the right place.
            </h2>
          </div>
        </div>
        <Content view={this.state.view}/>
        <Footer/>
      </div>
    );
  }
}

export default Main;
