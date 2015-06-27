'use strict';

import React from 'react/addons';
import Marty from 'marty';

let PhotoCollection = React.createClass({

  displayName: 'PhotoCollection',

  render () {
    let appState = this.app.applicationStore.getState();
    if (this.props.loading || !appState.dependencies['fb-api']) {
      return <div>Loading</div>
    } else {
      return _.map(this.props.albums, (album) => {
        return <div>{album.name}</div>
      });
    }
  }

});

export default Marty.createContainer(PhotoCollection, {
  listenTo: ['photoCollectionStore', 'applicationStore'],
  fetch: {
    albums () {
      return this.app.photoCollectionStore.getAlbums();
    }
  },
  pending () {
    return this.done({
      loading: true,
      albums: []
    });
  }
});