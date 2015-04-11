'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var MattlivingApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    MattlivingApp = require('components/MattlivingApp.js');
    component = React.createElement(MattlivingApp);
  });

  it('should create a new instance of MattlivingApp', function () {
    expect(component).toBeDefined();
  });
});
