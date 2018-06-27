import React, { Component } from 'react';
import classNames from 'classnames';
import Content from './Content.jsx'
import './CardTab.css';

class CardTab extends Component {
  constructor(props) {
    super(props);

    this._onTabClick = this._onTabClick.bind(this);

    this.state = {
      selected: this.props.autoSelected
    }
  }

  _onTabClick() {
    this.setState({ selected: true });
  }

  render() {

    let className = classNames({
      'card-tab': true,
      'selected': this.state.selected,
      'animate': this.state.selected && !this.props.autoSelected
    });

    const tabBottom = <div className='tab-bottom'></div>;

    const style = { bottom: this.props.index * 45 };

    const content = this.state.selected ?
      <Content view={this.props.view}/> : null;

    return (
      <div
        className={className}
        onClick={this._onTabClick}
        style={style}
        ref={tab => this.tab = tab}
      >
        {content}
        {tabBottom}
      </div>
    );
  }
}

export default CardTab;
