'use strict';

import React from 'react/addons';
import Marty from 'marty';
import _ from 'underscore';

require('./timeline.less');

let Timeline = React.createClass({

  displayName: 'Timeline',

  propTypes: {
    events: React.PropTypes.array
  },

  render () {
    let appState = this.app.applicationStore.getState();
    return (
      <div className='Timeline'>
      {
        _.map(this.props.events, (event, i) => {
          return <div key={i} className='Timeline-event'>{event.moment.year()}</div>
        })
      }
      </div>
    );
  }

});

export default Marty.createContainer(Timeline, {
  listenTo: ['applicationStore'],
  fetch: {

  },
  pending () {
    return this.done({
      loading: true
    });
  }
});
