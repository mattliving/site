'use strict';

import App from './app.js';
import Gallery from './gallery.js';
import Map from './map.js';
import React from 'react';
import Router from 'react-router';

let Route = Router.Route;

let content = document.getElementById('content');

let Routes = (
  <Route path="/" handler={App}>
    <Route path="gallery" name="gallery" handler={Gallery} />
    <Route path="map" name="map" handler={Map} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});