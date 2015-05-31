'use strict';

import React from 'react/addons';
import Marty from 'marty';

let PhotoCollection = React.createClass({

  displayName: 'PhotoCollection',

  render () {
    if (this.props.loading && !this.state.dependencies['fb-api']) {
      return <div>Loading</div>
    } else {

    }
  }

});

export default Marty.createContainer(PhotoCollection, {
  listenTo: 'photoCollectionStore',
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