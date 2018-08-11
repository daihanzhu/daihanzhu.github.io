import React, { Component } from 'react';
import Grid from './Grid.jsx';
import About from './About.jsx'
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
        <About></About>
      );

    } else if ( view === Views.Stories ) {
      return (
        <div className='about-text'>Here's a funny story</div>
      )
    }
  }
}

export default Content;
