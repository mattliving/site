'use strict';

import React from 'react/addons';
import {RouteHandler} from 'react-router';

// CSS
require('../../styles/normalize.css');
require('../../styles/app.less');

let imageURL = require('../../images/yeoman.png');

let App = React.createClass({
  render: function() {
    return (
      <RouteHandler/>
    );
  }
});

class Person {
  constructor(arg="default") {
    this.eat = "Happy Meal";
  }
}

export default App;
