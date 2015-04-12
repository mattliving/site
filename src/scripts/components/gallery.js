'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Packery = require("packery");

// CSS
require('../../styles/normalize.css');
require('../../styles/app.less');

var images = require("./gallery-item-names");

var Gallery = React.createClass({
  componentDidMount: function() {
    var packery = new Packery(document.getElementById('gallery-container'), {
      itemSelector: ".gallery-item",
      gutter: 0
    });
  },
  renderImages: function() {
    return images.map(function(image) {
      return <img className="gallery-item" src={image}/>;
    });
  },
  render: function() {
    return (
      <div id='gallery-container'>
        {this.renderImages()}
      </div>
    );
  }
});

// <img src={imageURL} />

module.exports = Gallery;
