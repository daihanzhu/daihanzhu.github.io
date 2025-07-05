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
        {/* <a onClick={() => this.props.goHome({scrollDown: true})}>
          Work
        </a> */}
        {/* <img src={require('./images/header-logo.png')} alt='Open door' className="header-logo"></img> */}
        <a onClick={() => this.props.switchView(Views.About)}>
          about
        </a>
        {/*<a onClick={() => this.props.switchView(Views.QAndA)}>
          Q + A
        </a> */}
      </div>
    );
  }
}

export default Header;
