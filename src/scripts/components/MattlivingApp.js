'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('../../styles/normalize.css');
require('../../styles/app.less');

var imageURL = require('../../images/yeoman.png');

var MattlivingApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

class Person {
  constructor(arg="default") {
    this.eat = "Happy Meal";
  }
}

console.log(new Person());

module.exports = MattlivingApp;
