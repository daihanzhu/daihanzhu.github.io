import React, { Component } from 'react';
import classNames from 'classnames';
import Content from './Content.jsx'
import './CardTab.css';

class CardTab extends Component {
  constructor(props) {
    super(props);

    this.select = this.select.bind(this);
    this.deselect = this.deselect.bind(this);

    this.state = {
      selected: false,
      deselected: false
    }
  }

  select() {
    this.setState({ deselected: false });
    this.setState({ selected: true });
  }

  deselect() {
    this.setState({ selected: false });
    this.setState({ deselected: true });
  }

  render() {

    let className = classNames({
      'card-tab': true,
      'selected': this.state.selected,
      'deselected': this.state.deselected,
      'auto-selected': this.props.autoSelected
    });

    const anySelect = this.state.selected || this.props.autoSelected;

    const tabBottomClass = anySelect ? 'white-div' : 'tab-bottom';

    const style = anySelect ? null : { bottom: this.props.index * 45 };

    const content = anySelect ? <Content view={this.props.view}/> : null;

    return (
      <div
        className={className}
        onClick={this.props.onClick}
        style={style}
        ref={tab => this.tab = tab}
      >
        {content}
        <div className={tabBottomClass}></div>
      </div>
    );
  }
}

export default CardTab;
