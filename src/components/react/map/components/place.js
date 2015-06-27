import React from 'react/addons';

import {placeStyle} from './placeStyle.js';

let Place = React.createClass({

  displayName: 'Place',

  propTypes: {
    text: React.PropTypes.string
  },

  render () {
    return (
      <div className='Place' style={placeStyle}>
        {this.props.text}
      </div>
    );
  }

});

export default Place;
