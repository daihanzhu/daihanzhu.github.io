import React, { Component } from 'react';
import Grid from './Grid.jsx';
import About from './About.jsx'
import EmptyState from './TileViews/EmptyState.jsx'
import RBCX from './TileViews/RBCX.jsx'
import Kudos from './TileViews/Kudos.jsx'
import QAndA from './QAndA.jsx'

import Views from './Views.js';

class Content extends Component {
  render() {
    const { view, switchView } = this.props;

    switch (view) {
      case Views.About:
        return <About/>;

      case Views.QAndA:
        return <QAndA/>;

      case Views.EmptyState:
        return <EmptyState/>;

      case Views.RbcX:
        return <RBCX/>;

      case Views.Kudos:
        return <Kudos/>;

      case Views.Tiles:
      default:
        return <Grid switchView={switchView}/>
    }
  }
}

export default Content;
