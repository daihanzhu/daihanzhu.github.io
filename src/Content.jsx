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
    // HACK to get the destination position, since the page hasn't laoded yet
    // (based on the content-wrapper styling in ContentWrapper.css)
    const pageWidth = document.body.offsetWidth;
    var destLeft = 100;
    var destTop = 195;

    console.log(pageWidth);
    if (pageWidth < 840) {
      destLeft = 0;
    } else {
      destLeft = (pageWidth - 840) / 2;
    }

    return (<style>{`
        @keyframes moveTile {
            0%   {opacity: 1;}
            25%  {opacity: 1;}
            50%  {opacity: 1;}
            75%  {opacity: 1;}
            100% {
               left: ${destLeft}px;
               top: ${destTop}px;
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
