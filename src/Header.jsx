import React, { Component } from 'react';
import './Header.css';

import Views from './Views.js';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className={"home-button" + (this.props.view === Views.Tiles ? ' header-link-active' : '')} onClick={() => this.props.goHome()}>
          home
        </a>
        {/* <a onClick={() => this.props.goHome({scrollDown: true})}>
          Work
        </a> */}
        {/* <img src={require('./images/header-logo.png')} alt='Open door' className="header-logo"></img> */}
        <a className={this.props.view === Views.About ? ' header-link-active' : ''} onClick={() => this.props.switchView(Views.About)}>
          about
        </a>
      </div>
    );
  }
}

export default Header;
