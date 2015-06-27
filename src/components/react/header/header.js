'use strict';

import React from 'react/addons';

require('./header.less');

let Header = React.createClass({

  displayName: 'Header',

  render () {
    return (
      <div className='Header'>
        <div className='Header-title'>
          {this.props.title}
          <span className='Header-subtitle'>
            <span className='Header-subtitle-maintext'>{this.props.subtitle}</span>
            <span className='Header-subtitle-subtext'>striving and thriving</span>
          </span>
        </div>
        <div className='Header-links'>
          <a className='Header-link' href='https://uk.linkedin.com/in/polyglotprogrammer' target='_blank'>linkedin</a>
          <a className='Header-link' href='https://github.com/mattliving' target='_blank'>github</a>
        </div>
      </div>
    );
  }

});

export default Header;
