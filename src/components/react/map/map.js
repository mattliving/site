'use strict';

import React from 'react/addons';
import Marty from 'marty';

let Map = React.createClass({

  displayName: 'Map',

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
        <google-map lat='37.790' long='-122.390' zoom='12'>
          <google-map-marker latitude='37.779' longitude='-122.3892' draggable='true' title='Go Giants!'></google-map-marker>
          <google-map-marker latitude='37.777' longitude='-122.38911'></google-map-marker>
        </google-map>
      );
    }
  }

});

export default Marty.createContainer(Map, {
  listenTo: ['mapStore', 'applicationStore'],
  fetch: {

  },
  pending () {
    return this.done({
      loading: true,
      albums: []
    });
  }
});