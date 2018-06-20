import React, { Component } from 'react';
import Content from './Content.jsx'
import './Main.css';

import Views from './Views.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this._switchToAbout = this._switchToAbout.bind(this);
    this._switchToWork = this._switchToWork.bind(this);

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

  render() {
    return (
      <div className="App">
        <div className="App-options">
          <a onClick={this._switchToAbout}>about </a>
          <a onClick={this._switchToWork}> work</a>
        </div>
        <h1 className="App-title">Welcome to Dana's shitty website</h1>
        <div className="content-card-wrapper">
          <Content view={this.state.view}/>
          <div className="App-footer"></div>
        </div>
      </div>
    );
  }
}

export default Main;
