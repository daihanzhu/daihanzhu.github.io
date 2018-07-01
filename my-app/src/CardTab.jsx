import React, { Component } from 'react';
import classNames from 'classnames';
import Content from './Content.jsx'
import './CardTab.css';

class CardTab extends Component {
  constructor(props) {
    super(props);

    this.onTabClick = this.onTabClick.bind(this);

    this.state = {
      selected: false
    }
  }

  onTabClick() {
    this.setState({ selected: true });
  }

  render() {

    let className = classNames({
      'card-tab': true,
      'selected': this.state.selected,
      'auto-selected': this.props.autoSelected
    });

    const anySelect = this.state.selected || this.props.autoSelected;

    const tabBottom = <div className='tab-bottom'></div>;

    const style = anySelect ? null : { bottom: this.props.index * 45 };

    const content = anySelect ? <Content view={this.props.view}/> : null;

    return (
      <div
        className={className}
        onClick={this.onTabClick}
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
