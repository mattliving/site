'use strict';

import React from 'react';
import Router from 'react-router';
import Marty from 'marty';
import {ApplicationContainer} from 'marty';
import App from './components/react/app/app.js';
import Gallery from './components/react/gallery/gallery.js';
import Map from './components/react/map/map.js';

let Route = Router.Route;
let content = document.getElementById('app');
let context = require.context('./', true, /(actions|queries|sources|stores)/);

class Application extends Marty.Application {
  constructor(options) {
    super(options);
    this.register({
      applicationActions: require('./actions/application'),
      applicationStore: require('./stores/application'),

      mapActions: require('./actions/map'),
      mapStore: require('./stores/map'),

      photoCollectionActions: require('./actions/photoCollection'),
      photoCollectionApi: require('./sources/photoCollection'),
      photoCollectionQueries: require('./queries/photoCollection'),
      photoCollectionStore: require('./stores/photoCollection')
    });
  }
}

let AppWrapper = React.createClass({
  displayName: 'AppWrapper',
  render () {
    return (
      <ApplicationContainer app={new Application()}>
        <App/>
      </ApplicationContainer>
    );
  }
});

let Routes = (
  <Route path="/" handler={AppWrapper}>
    <Route path="gallery" name="gallery" handler={Gallery} />
    <Route path="map" name="map" handler={Map} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});

window.Marty = require('marty');
window.React = React;
