'use strict';

var $ = require("jquery");
var React = require("react/addons");
var ReactTransitionGroup = React.addons.TransitionGroup;
var Packery = require("packery");

// CSS
require('../../styles/normalize.css');
require('../../styles/app.less');

var images = require("./gallery-item-names");

var Gallery = React.createClass({
  componentDidMount: function() {
    this.$el = $(this.getDOMNode());
    this.el = this.$el.get(0);
    preload(images, () => {
      this.packery = new Packery(this.el, {
        itemSelector: ".gallery-item",
        gutter: 0
      });
    });
  },
  renderImages: function() {
    return images.map((image, i) => {
      return <img key={"gallery-item-" + i} className="gallery-item" src={image} onClick={this.handleImageClick} />;
    });
  },
  render: function() {
    return (
      <div id='gallery-container'>
        {this.renderImages()}
      </div>
    );
  },
  handleImageClick: function(e) {
    var $target = $(e.target);
    $target.toggleClass("toggled");

    if ($target.hasClass("toggled")) {
      this.packery.fit(e.target);
    } else {
      this.packery.layout();
    }
  }
});

function preload(images, cb) {
  if (!(images instanceof Array)) {
    images = [images];
  }

  var completed = [];

  var onload = function () {
    completed.push(this);
    if (completed.length === images.length) {
      cb(completed);
    }
  };

  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.onload = onload;
    img.src = images[i];
  }
}

module.exports = Gallery;
