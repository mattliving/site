'use strict';

import React from 'react/addons';

let Map = React.createClass({

  render () {
    return (
      <google-map lat="37.790" long="-122.390" zoom="12">
        <google-map-marker latitude="37.779" longitude="-122.3892" draggable="true" title="Go Giants!"></google-map-marker>
        <google-map-marker latitude="37.777" longitude="-122.38911"></google-map-marker>
      </google-map>
    );
  }

});

export default Map;