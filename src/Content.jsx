import React, { Component } from 'react';
import Grid from './Grid.jsx';
import About from './About.jsx'
import EmptyState from './TileViews/EmptyState.jsx'
import RBCX from './TileViews/RBCX.jsx'
import Kudos from './TileViews/Kudos.jsx'
import QAndA from './QAndA.jsx'

import Views from './Views.js';
import './Content.css'

class Content extends Component {
  getContent(view, switchView) {
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

  getKeyframe(tileInfo) {
    // TODO: Get the destination position from the actual image
    return (<style>{`
        @keyframes moveTile {
            from {
               left: ${tileInfo.left}
               top: ${tileInfo.top}
             }
             to {
               left: 100px;
               top: 100px;
               opacity: 0;
             }
        }
    `}</style>);
  }

  getTileImage(tileInfo) {
    const floatingTileStyle = {
      left: tileInfo.left,
      top: tileInfo.top
    }

    return (tileInfo.img
      ? <img src={tileInfo.img} alt='floating tile' className='floatingTile' style={floatingTileStyle}>
        </img>
      : undefined);
  }

  render() {
    const { view, switchView, tileInfo } = this.props;
    // TODO: Remove debug
    console.log('Content (!)')
    console.log(tileInfo);

    const keyframe = this.getKeyframe(tileInfo);
    const tileImage = this.getTileImage(tileInfo);

    const content = this.getContent(view, switchView);

    return <div className="boop">
      {keyframe}
      {tileImage}
      {content}
    </div>
  }
}

export default Content;
