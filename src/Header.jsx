import React, { Component } from 'react';
import './Header.css';

import Views from './Views.js';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="home-button" onClick={() => this.props.goHome()}>
          daihan.ca
        </a>
        <div className="left-nav">
          <a onClick={() => this.props.goHome({scrollDown: true})}>
            Work
          </a>
          <a onClick={() => this.props.switchView(Views.About)}>
            My Story
          </a>
          <a onClick={() => this.props.switchView(Views.QAndA)}>
            Q + A
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
