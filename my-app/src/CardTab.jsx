import React, { Component } from 'react';
import classNames from 'classnames';
import './CardTab.css';

class CardTab extends Component {
  constructor(props) {
    super(props);

    this._onTabClick = this._onTabClick.bind(this);

    this.state = {
      animate: false
    }
  }

  _onTabClick() {
    this.setState({ animate: true });
    this.props.onClick();
  }

  render() {
    let className = classNames({
      'card-tab': true,
      'animate': this.state.animate
    });

    return (
      <div className={className} onClick={this._onTabClick}>
        <div className="tab-bottom"></div>
      </div>
    );
  }
}

export default CardTab;
