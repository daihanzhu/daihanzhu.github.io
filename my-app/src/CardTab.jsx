import React, { Component } from 'react';
import './CardTab.css';

class CardTab extends Component {
  render() {
    const { onClick, onClick2 } = this.props;

    return (
      <div className="card-tab-wrapper">
        <div className="card-tab" onClick={onClick}>
          <div className="tab-bottom"></div>
        </div>
        <div className="card-tab" onClick={onClick2}>
          <div className="tab-bottom"></div>
        </div>
      </div>
    );
  }
}

export default CardTab;
