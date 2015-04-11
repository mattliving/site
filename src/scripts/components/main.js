'use strict';

var MattlivingApp = require('./MattlivingApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={MattlivingApp}>
    <Route name="/" handler={MattlivingApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
