'use strict';

var App     = require('./app.js');
var Gallery = require('./gallery.js');
var React   = require('react');
var Router  = require('react-router');
var Route   = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route path="/" handler={App}>
    <Route path="gallery" name="gallery" handler={Gallery} />
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});