'use strict';

import _ from 'underscore';
import $ from 'jquery';
import React from 'react/addons';
// import Packery from 'packery';
import images from './gallery-item-names';

require('../../styles/normalize.css');
require('../../styles/app.less');

let Gallery = React.createClass({

  componentDidMount () {
    this.$el = $(this.getDOMNode());
    this.el = this.$el.get(0);
    this.preload(images, () => {
      // this.packery = new Packery(this.el, {
      //   itemSelector: '.gallery-item',
      //   gutter: 0
      // });
    });
  },

  render () {
    return (
      <div id='gallery-container'>
        {this.renderImages()}
      </div>
    );
  },

  renderImages () {
    return images.map((image, i) => {
      return <img key={'gallery-item-' + i} className='gallery-item' src={image} onClick={this.handleImageClick} />;
    });
  },

  handleImageClick (e) {
    let $target = $(e.target);
    $target.toggleClass('toggled');

    // if ($target.hasClass('toggled')) {
    //   this.packery.fit(e.target);
    // } else {
    //   this.packery.layout();
    // }
  },

  preload (images, cb) {
    if (!(images instanceof Array)) {
      images = [images];
    }

    let completed = [];

    let onload = function () {
      completed.push(this);
      if (completed.length === images.length) {
        cb(completed);
      }
    };

    _.each(images, function(image) {
      let img = new Image();
      img.onload = onload;
      img.src = image;
    });
  }
});

export default Gallery;
