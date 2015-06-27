'use strict';

import React from 'react/addons';
import Marty from 'marty';
import GoogleMap from 'google-map-react';
import Place from './components/place';

let Map = React.createClass({

  displayName: 'Map',

  getDefaultProps () {
    return {
      center: [51.5286416, -0.1015987],
      zoom: 9
    };
  },

  componentWillMount () {
    let link = document.createElement('link');
    link.rel = 'import';
    link.href = 'components/polymer/google-map/google-map.html';
    link.onload = () => {
      this.app.applicationActions.setDependencyReady('google-map', true);
    };
    document.getElementsByTagName('head')[0].appendChild(link);
  },

  render () {
    if (this.props.loading || !this.app.applicationStore.getState().dependencies['google-map']) {
      return <div>Loading</div>
    } else {
      return (
        <google-map data-use-data-attributes="true" data-latitude={this.props.center[0]} data-longitude={this.props.center[1]} data-zoom={this.props.zoom} disable-default-ui>
          <google-map-marker data-latitude='51.5286416' data-longitude='-0.1015987'></google-map-marker>
        </google-map>
      );
    }
  }
});

// <GoogleMap
//   center={this.props.center}
//   zoom={this.props.zoom}>
//   <Place lat={59.955413} lng={30.337844} text={'A'} />
// </GoogleMap>

export default Marty.createContainer(Map, {
  listenTo: ['mapStore', 'applicationStore'],
  fetch: {

  },
  pending () {
    return this.done({
      loading: true
    });
  }
});
