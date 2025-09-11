import React, { Component } from 'react';
import Header from './Header.jsx';
import Grid from './Grid.jsx';
import About from './About.jsx'
import OpenText from './TileViews/OpenText.jsx'
import RBCX from './TileViews/RBCX.jsx'
import Kudos from './TileViews/Kudos.jsx'

import Views from './Views.js';
import './Content.css';

class Content extends Component {
  getContent(view, switchView) {
    switch (view) {
      case Views.About:
        return <About/>;

      case Views.OpenText:
        return <OpenText switchView={switchView}/>;

      case Views.RbcX:
        return <RBCX switchView={switchView}/>;

      case Views.Kudos:
        return <Kudos switchView={switchView}/>;

      case Views.Tiles:
      default:
        return <Grid switchView={switchView} showHeading={true} />
    }
  }

  getKeyframe(tileInfo) {
    // HACK to get the destination position, since the page hasn't laoded yet
    // (based on the content-wrapper styling in ContentWrapper.css)
    const pageWidth = document.body.clientWidth;
    var destLeft = 100;
    var destTop = 195;

    if (pageWidth < 500) {
      destLeft = 40;
    } else if (pageWidth < 840) {
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
            99%  {opacity: 1;}
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

  getAdditionalClassNames(view) {
    switch (view) {
      case Views.About:
        return 'about-wrapper';
      case Views.Tiles:
        return 'grid-content-container'
      default:
        return '';
    }
  }

  render() {
    const { view, switchView, tileInfo } = this.props;

    const keyframe = this.getKeyframe(tileInfo);
    const tileImage = this.getTileImage(tileInfo);
    const content = this.getContent(view, switchView);
    const classNames = this.getAdditionalClassNames(view);

    const shouldShowHeader = view !== Views.Tiles;

    // NOTE: Need to use a key to re-render when the component updates
    return <div className={"content-container " + classNames} key={tileInfo.img}>
      {shouldShowHeader ?  <Header
        goHome={this.props.goHome}
        view={this.props.view}
        switchView={this.props.switchView}
      /> : null}
      {keyframe}
      {tileImage}
      {content}
    </div>
  }
}

export default Content;
