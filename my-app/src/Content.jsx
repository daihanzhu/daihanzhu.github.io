import React, { Component } from 'react';
import Grid from './Grid.jsx';
import './Content.css';

import Views from './Views.js';

class Content extends Component {
  render() {
    const view = this.props.view;

    if ( view === Views.Tiles ) {
      return (
        <Grid/>
      );

    } else if ( view === Views.About ) {
      return (
        <div className='about-text'>About Me: I am from Albert(Hein)a</div>
      );

    } else if ( view === Views.Stories ) {
      return (
        <div className='about-text'>Here's a funny story</div>
      )
    }
  }
}

export default Content;
