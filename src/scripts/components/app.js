'use strict';

var React                = require('react/addons');
var RouteHandler         = require('react-router').RouteHandler;
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('../../styles/normalize.css');
require('../../styles/app.less');

var imageURL = require('../../images/yeoman.png');

var App = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
        <RouteHandler/>
      </div>
    );
  }
});

class Person {
  constructor(arg="default") {
    this.eat = "Happy Meal";
  }
}

module.exports = App;
