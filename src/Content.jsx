import React, { Component } from 'react';
import Grid from './Grid.jsx';
import About from './About.jsx'
import EmptyState from './TileViews/EmptyState.jsx'
import RBCX from './TileViews/RBCX.jsx'
import Kudos from './TileViews/Kudos.jsx'
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

    } else if ( view === Views.QAndA ) {
      return (
        <div className='about-text'>Coming Soon!</div>
      )

    } else if ( view === Views.EmptyState ) {
      return (
        <EmptyState/>
      )

    } else if ( view === Views.RbcX ) {
      return (
        <RBCX/>
      )
    } else if (view === Views.Kudos) {
      return (
        <Kudos/>
      )
    }
  }
}

export default Content;
