import React, { Component } from 'react';
import Grid from './Grid.jsx';
import About from './About.jsx'
import EmptyState from './TileViews/EmptyState.jsx'
import './Content.css';

import Views from './Views.js';

class Content extends Component {
  render() {
    const { view, switchView } = this.props;

    if ( view === Views.Tiles ) {
      return (
        <Grid switchView={switchView}/>
      );

    } else if ( view === Views.About ) {
      return (
        <About/>
      );

    } else if ( view === Views.Stories ) {
      return (
        <div className='about-text'>Here's a funny story</div>
      )
    } else if ( view === Views.EmptyState ) {
      return (
        <EmptyState/>
      )
    }
  }
}

export default Content;
